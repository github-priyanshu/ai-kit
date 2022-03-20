/*this page is to give the user experience to see which movie is to be watched*/

/*dom elements variables*/
var filesIn=op('#files'),
curVidDataPan={
	elem: op(".dataBox .currentVideo"),
	name: op(".currentVideo .name")
};

var vidSource=null,
timeChInterval,
vidDuration,
videoApplied=false,
msgInterval,
videoStoringInterval,
vidHistory=localStorage.getItem("vidHistory") || [];
if(typeof vidHistory=="string"){
	vidHistory=vidHistory.split(",")
}


/*get player start*/

function askLink(){
	dialog.inside(`<div fs="1.1em" col="#ff3000">/...Link</div><input type="text" class="noBtn" id="lnkIn" placeholder="Paste the link...">`);
	dialog.buttons("Cancel","Go");
	dialog.show();
	dialog.success=()=>{
		var link=op("#lnkIn").value;
		if(link){setLink(link)}
	}
}

video.onerror=(e)=>{
	if(vidPan.classList.contains("active")){
		let errCode=video.error.code-1;
		let msgAry=["Loading was interrupted. Try again.","This video is not supported in this Browser.","Check your network connectivity","There is an error!"];
		let msg=msgAry[errCode];

		dialog.buttons("Close","Ok")
		dialog.success=()=>{null};
		dialog.inside(`<span col="#f00" ff="glory">Error :</span><br><span ff="glory" col="#444">/...${msg}</span>${onErrDown()}`);
		dialog.show();

		sendProblem(vidSource.name+" /...Problem");
	}
}

function onErrDown(){
	if(video.src.startsWith("http")){
		var html=`<br><span>/...Download</span><br>Try to DOWNLOAD it, because unable to play right now.`;
		dialog.buttons("Close","Download");
		dialog.success=()=>{
			window.open(`https://ai-movie-download.netlify.app?lnk=${video.src}`);
		};
		return html;
	}
}

var mid=undefined,mlnk,sh,ws,mname;
var params=decodeURI(location.search.replace("?",''));
params=params.split('&');
for(let a=0; a<params.length; a++){
	eval(params[a]);
}

var vidSource={};

if(mlnk){
	mlnk=mlnk.replaceAll("~~","&");
	setMovie(mlnk,"Direct Link");
}
else if(mid){
	var curMx=movies[mid];
	document.title=curMx.name + " : Ai-Player - All new movies";
	dialog.inside(`Want to watch <span fs="1.1em" col="#ff3000">'${curMx.name}'</span> for free.`);
	dialog.success=()=>{
		log(curMx)
		setMovie(curMx.src,curMx.name);
	}
	dialog.show();
}
localStorage.removeItem("aiCurVid");


function setMovie(lnk,name,midx=false){
	if(midx){updateHistory(midx)}
	vidSource={
		name,
		src: lnk,
		mid: midx
	}

	load.show();
	setLink(vidSource.src);
	window.scrollTo(0,0);

	/*TO MAKE THE DOWNLOAD AND SHARE BUTTON WHILE VIDEO*/
	var elem="";
	try{op(".currentVideo .curData").remove()}catch{}
	if(video.src.startsWith("http")){
		elem=`<div class="curData flex">
					<div class="flex" id="downCur" ico="download" onclick="checkDownTrue('https://ai-movie-download.netlify.app?lnk=${video.src}')" bg="#ffa700"></div>
					<div class="flex" id="shareCur" ico="send" onclick="shareCurent()" bg="lime" ></div>
				</div>`;
	}
	curVidDataPan.elem.insertAdjacentHTML("beforeend",elem)
	resetFormat();

	try{openProAd();}catch{}
}
function getLinkOrMid(){
	if(!video.src.startsWith("http")){
		return `https://ai-player.netlify.app?sh=17`;
	}
	let midx=video.getAttribute("mid"),lnkx;
	if(midx){
		lnkx=`https://ai-player.netlify.app?mid=${midx}`;
	}else{
		lnkx=`https://ai-player.netlify.app?mlnk='${video.src}'`;
	}
	return lnkx+"&sh=17";
}
function shareCurent(){
	var lnkx=getLinkOrMid();
	shareApp({title: vidSource.name,text: `Direct link for ${vidSource.name}`, url:lnkx})
}

function importViaLink(){
	vidSource= {
		name:decodeURI(link.input.value),
		src:link.input.value
	}
	load.show();
	setLink(vidSource.src);
}

function setLink(lnk){
	if(navigator.onLine || true){
		video.src=lnk;
		playing=false;
		if(vidSource.mid){video.setAttribute("mid",vidSource.mid)}else{
			video.removeAttribute("mid");
		}	
		video.onprogress=()=>{
			if(!playing){
				playPause();
			}
		}
		vidOnStart();

		clearInterval(videoStoringInterval);
		videoStoringInterval= setInterval(storeCurVid,5000);
	}else{
		alert("You are offline!");
		stopPlaying();
	}

}

function notLoaded(){
	if(video.readyState==4){
		load.hide();
	}else{
		load.show();
	}
}


function applyVideo(){
	let srcxx=URL.createObjectURL(vidSource)
	video.src=srcxx;
	playing=false;
	playPause();
	videoApplied=true;
	vidOnStart();
}

function getViaDevice(){
	filesIn.click();
	filesIn.onchange=(e)=>{
		vidSource=filesIn.files[0];
		applyVideo();
	}
	localStorage.removeItem("aiCurVid");
}

function chDispTime(){
	timeBox.played.innerHTML=getMinSec(video.currentTime);
	var totalWidth=duration.line.offsetWidth,
	filledWidht=totalWidth/vidDuration*video.currentTime;

	duration.filled.style.width=Math.ceil(filledWidht)+'px';
}

function applyData(){/*funciton will be called after the video is started to be played*/
	vidDuration=video.duration;
	timeBox.total.innerHTML='/'+getMinSec(vidDuration);

	videoApplied=true;
	clearInterval(timeChInterval);
	timeChInterval=setInterval(()=>{
		chDispTime();
		notLoaded();
	},1000)
	clearInterval(msgInterval);
	showDataForUser();

	document.title=vidSource.name+" : Ai-Player";
}

function playPause(){
  if(!playing){
  	video.play().then(applyData)
		playing=true;
		playBtn.innerHTML=elems.pause;
		return true;
	}else	if(playing){
		video.pause();
		playing=false;
		playBtn.innerHTML=elems.play;
		clearInterval(timeChInterval)
		return true;
	}
}

function setSpeed(per){
	if(videoApplied){
		vidSpeed=Math.ceil(per*4)/100;
		video.playbackRate=vidSpeed;
		message(vidSpeed,"<span>x<span>");
	}
}

function setDuration(per){
	if(videoApplied){
		var curTime=vidDuration/100*per;
		video.currentTime=curTime;
		chDispTime();
	}
}


function getMinSec(time=0){
	let hrs=Math.floor(time/3600);
	time%=3600;
	let min=Math.floor(time/60),
	sec=Math.floor(time%60);
	if(hrs!=0){
		hrs=hrs<10?`0${hrs}`:hrs;
		hrs+=":";
	}else{
		hrs="";
	}
	min=min<10?`0${min}`:min;
	sec=sec<10?`0${sec}`:sec;
	return hrs+min+':'+sec;
}

function showDataForUser(){
	curVidDataPan.elem.classList.add('active');
	curVidDataPan.name.innerHTML=vidSource.name;
	// curVidDataPan.sizeAndTime.innerHTML=`<i></i><span>${getMinSec(vidDuration)}</span>`;
}

function resetSpeed(){
	setSpeed(25);
	speed.filled.style.width=25+'%';
	speed.percentage=25;
}
function alterSpeed(val){
	val=eval(speed.percentage+val);
	if(val>0 && val<100){
		setSpeed(val);
		speed.percentage=val;
		speed.filled.style.width=val+'%';
	}
}

function hideIntro(){
	op(".banner").style.display="none";
	vidPan.classList.add("active");
}

window.onhashchange=(e)=>{
	if(location.hash==""){
		stopPlaying();
	}
}

function vidOnStart(){
	hideIntro();
	window.scrollTo(0,0);
	location.assign("#watching");
	try{send(vidSource.name)}catch{};

	showLoadingMsg();
	let sr=video.src;
	if(sr.includes("480") || sr.includes("720") || sr.includes("1080")){
		quality.btn.style.display=""
	}else{
		quality.btn.style.display="none"
	}
	try{hrShare.start(vidSource.name);}catch{}	
	try{startLoadShow()}catch{}
}

function stopPlaying(){/*to stop the video forcefully*/
	vidSource={},
	timeChInterval,
	vidDuration,
	videoApplied=false;

	clearInterval(videoStoringInterval);
	clearInterval(timeChInterval)
	clearInterval(msgInterval);
	/*show intro*/

	op(".banner").style.display="";
	vidPan.classList.remove("active");
	curVidDataPan.elem.classList.remove("active")
	video.src='';
	try{hrShare.end();}catch{}
}

/*screen rotate for get full screen*/
screen.orientation.addEventListener('change', function(e) { autoFullScr(); })

function autoFullScr(){
	if(screen.orientation.angle%180==0 && videoApplied && fullScr){
		fullScrPan.click();
	}else if(screen.orientation.angle%180!=0 && videoApplied && !fullScr){
		fullScrPan.click();
	}
}


function storeCurVid(){
	let data={
		name: vidSource.name,
		src: vidSource.src,
		time: video.currentTime,
	}
	if(data.name){
		data=JSON.stringify(data);
		localStorage.setItem("aiCurVid",data);
	}
}

function showLoadingMsg(){
	curVidDataPan.elem.classList.add('active');
	let msg=["/...Please wait while loading.","/...It will be there in seconds.","/...Almost there!","/...Unfortunately It is taking longer than expected.","/...Fetching"];

	let num=0;
	funXXX();
	clearInterval(msgInterval);
	msgInterval= setInterval(funXXX,4000)
	function funXXX(){
		curVidDataPan.name.innerHTML=((vidSource.name +"<br>") || "")+(msg[num] || msg[4]);
		num++;
	}
}

video.onended=()=>{
	clearInterval(videoStoringInterval);
	localStorage.removeItem("aiCurVid");
}

function checkDownload(){
	if(localStorage.getItem("downloadedSomething")){
		op("#deviceFile").classList.add("active");
		dialog.inside("You may watch the downloed videos only in this app.");
		dialog.success=()=>{
			getViaDevice();
		}
		dialog.buttons("Not now","Open");
		dialog.show();
		saveDownData("remove");
	}
}
checkDownload();

function saveDownData(kind="set"){
	if(kind=="set"){
		localStorage.setItem("downloadedSomething",true);
		localStorage.setItem("downloadExperience",Number(localStorage.getItem("downloadExperience"))+1)
	}else{
		localStorage.removeItem("downloadedSomething");
	}
}
function updateHistory(midx){
	if(vidHistory[0]!=midx){
		vidHistory.unshift(midx);
		localStorage.setItem("vidHistory",vidHistory.join(","));
	}
}