opp("*[sz]").forEach(val=>{
	var at=val.getAttribute("sz").split("x");
	val.style.width=at[0]+"px";
	val.style.height=at[1]+"px";
})
var vidHlp=op('#hlpVid');
var search=location.search.replace('?lnk=','');
search=JSON.parse(decodeURI(search));


var shareText=`
Downloading *${search.name || "a Latest Movie"}* in Free.

All Movies are:
*Double XL*
*Cirkus*
*Phone Booth + many more...*

https://ai-player.netlify.app?sh=21`,
shareNum=Number(localStorage.getItem("shareNum")) || 1,
mainHelp="mvdown/media/helpVid/downhlp.mp4",
shareHelp="mvdown/media/helpVid/sharehlp.mp4",
uiHtml=[];

var circle=op("#progress circle.main");
applyData();

function checkQ(){
	if(shareNum%3!=0){
		download();
		showAd();
	}else{
		share();
		vidHlp.src=shareHelp;
	}
}

function download(){
	vidHlp.pause();
	if(search.altLnk!="false" && search.altLnk){
		uiHtml=[`Choose Server to Download..!!`,`<button onclick="realDown(1,'${search.src}')" class="noBtn">Server 1</button><br><br><p>if server 1 not working</p><button onclick="realDown(2,'${search.altLnk}')" class="noBtn">Server 2</button>`];
	}else{
		if(search.src.includes("drop.download")){
			mainHelp="mvdown/media/helpVid/downalt.mp4";
		}
		uiHtml=[``,`<button onclick="realDown(1,'${search.src}')" class="noBtn">Download</button>`];
	}
	vidHlp.src=mainHelp;
	vidHlp.pause();
}
var isSet=true;
function realDown(server,lnk){
	setQuota();
	send("//...Download ~ Server"+server+' '+shareNum+" "+search.name);
	window.open(lnk);
}

function share(){
	uiHtml=["<span fs='1.2em' col='#ff3000'>फ्री डाउनलोड करने<br>के लिए शेयर करें</span><br>",`<button class="noBtn" style="background: linear-gradient(90deg,#0e0,#0f0); font-size:1.2em;" onclick="shareOn();">अपने स्टेटस पर लगाएं</button>`];
}

function shareOn(){
	checkBlur(4,"shared");
	window.open(encodeURI("https://wa.me?text="+shareText));
}
function setQuota(){
	if(isSet){
		localStorage.setItem("shareNum",++shareNum);	
		isSet=false;
	}
}
function shared(){
	setQuota();
	send("//...Shared from download ~ "+shareNum);
	download();
	makeUi(...uiHtml);
	showAd();
}
function progressEnd(){
	log("Progress ended");
	makeUi(...uiHtml);
}

function startProgress(){
	circle.classList.add("active");
	makeUi("<span fs='1.2em' col='#ff3000'>Generating Link...</span><br>Creating Link. Please wait...")
	setTimeout(progressEnd,2000)
	checkQ();
}
startProgress();
/*
if(search){
	startDown();
}*/

function makeUi(txt="",button=""){
	op(".lnkLoader").innerHTML=`<div>${txt}</div>`+button;
	resetFormat();
}

function startDown(){
	var timers=opp(".tm"),s=9,timxx;
	timxx=setInterval(()=>{
		timers.forEach(val=>{
			val.innerHTML=s+"s";
		})
		if(s==0){
			op("#mnL").classList.add("active");
			op("#mnL").href=search;
			clearInterval(timxx)
		}
		s--;
	},1000)

}

document.body.addEventListener("click",videoOn);
vidHlp.addEventListener("click",videoOnonVid);
function videoOnonVid(e){
	e.preventDefault();
	videoOn();
	vidHlp.removeEventListener("click",videoOnonVid);
}

function videoOn(){
	vidHlp.muted=false
	vidHlp.currentTime=0;
	vidHlp.play();

	op(".unmuteT").innerHTML="How to download (help)"

	document.body.removeEventListener("click",videoOn);
	vidHlp.removeEventListener("click",videoOnonVid);
}

var pausedByBlur=false;
window.onblur=()=>{
	pausedByBlur=true;
	vidHlp.pause();
}
window.onfocus=()=>{
	if(pausedByBlur){
		vidHlp.play();
		pausedByBlur=false;
	}
}
/*
var toAs=true;
window.onscroll=()=>{toAs=false}
setTimeout(()=>{
	if(toAs){
		window.scrollTo(0,500);
	}
},5000);
*/

function applyData(){
	if(search.name){op("#mvName").innerHTML=search.name}else{op("#mvName").remove()}
	if(search.img){op("#mvPos").src=search.img}else{op("#mvPos").remove()}
}