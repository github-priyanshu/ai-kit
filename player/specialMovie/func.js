var lastDate=localStorage.getItem("specialLastDate"),
nowDate=new Date().getDate()+"/"+(new Date().getMonth()+1),
ctNm=Number(localStorage.getItem("specialCtNm") || 0),
video=op("#mainVid"),
downloadedNow=false,
disturbTime=4,
priorAdTime=300;//this variable will tell how muchh before ad will runn

video.oncontextmenu=(e)=>{
	e.preventDefault();
	// alert("yes");
	disturbNext();
	log("called check disturb")
}

if(lastDate!=nowDate){
	ctNm=0;
	localStorage.setItem("specialLastDate",nowDate);
	localStorage.setItem("specialCtNm",ctNm);
}
// var task=[downAppToCont,share,showAppAd,showAppAd,showAppAd];
var task=[share];

// setInterval(checkDisturb,2*60*1000);

function checkDisturb(){
	log("ctNm "+ctNm);
	log("will show ad after min : "+(((ctNm+1)/disturbTime*video.duration-priorAdTime)/60));
	if(video.currentTime>=(((ctNm+1)/disturbTime*video.duration-priorAdTime))){
		disturbNext();
	}
}

function disturbNext(){
	ctNm=ctNm%task.length;

	task[ctNm]();
	ctNm++;
	localStorage.setItem("specialCtNm",ctNm);
}

function share(){
	openDisturbPan(
	"Important, Do it fast.!",
	"Please, share on your 'WhatsApp Status' to continue.",
	"आगे देखने के लिए कृपया आप अपने 'WhatsApp Status' पर शेयर करें|",
	"WhatsApp",
	"#00a173",
	"sharing()"
	);
}

function sharing() {
var srhTxt=`सारी नई फिल्में है 'Ai Player' पर 
मैं देख रहा हूं '*Pathaan Specials*'
👇 Join Me 👇
https://ai-player.netlify.app?sh=17
All new movies are here:
*Pathaan*
*Mission Majnu*
*ChhatriWali*
*Gandhi Godse*`;
window.open(`https://wa.me?text=${encodeURI(srhTxt)}`);
checkBlur(4,"closeDisturbPan");
}

function showAppAd(){
	var apAd=new appAd();
	setTimeout(()=>{
		video.webkitExitFullscreen();
		setTimeout(()=>{
			apAd.showAd();
		},1000)
	},10000)
}
function downAppToCont(){
	if(isDownLoaded()){
		ctNm++;
		disturbNext();
	}else{//download now the app
		openDisturbPan(
		"Please, be Kind.!",
		"Please, download & Open in App(1MB) to continue.",
		"आगे की फिल्म देखने के लिए कृपया ऐप(1MB) डाउनलोड करें और देखें|",
		"Install",
		"#00a173",
		"downloading()"
		);
	}
}
function downloading() {
	op('.downBtn').click();
	var intxx=setInterval(()=>{
		if(downloadedNow){closeDisturbPan();clearInterval(intxx)};
	},3000);
}

function openDisturbPan(mnTxt,eng,hn,btnTxt,btnCol,btnFn){
	back.disable();
	video.webkitExitFullscreen();
	setTimeout(()=>{
		video.pause();
		var html=`
		<style>
			.disturb > *{
				margin: 50px 0;
			}
			.disturb > .infor h2{
				margin: 50px 0;
				text-align:center;
				padding:0 5px;
			}
			.disturb button{
				color: #fff;
				padding: 10px 20px;
				border-radius: 2px;
			}

		</style>
		<div class="disturb flex c" style="position: fixed;top: 0;left: 0;width: 100%;height: 100vh;background: #fffa;backdrop-filter: blur(5px);">
			<h1>${mnTxt}</h1>

			<div class="infor" style="margin: 0">
				<h2>${hn}</h2>
				<h2>${eng}</h2>
			</div>
			<button class="noBtn" id="disturbBtn" style="background: ${btnCol}; font-family: sans-serif; font-size: 1.3em" onclick="${btnFn}">
				${btnTxt}
			</button>
		</div>`
		op("body").insertAdjacentHTML("beforeend",html);
	},1000)
}
function closeDisturbPan(){
	opp(".disturb").forEach(val=>{val.remove()});
	back.enable();
}

function isDownLoaded() {
  return (window.matchMedia('(display-mode: standalone)').matches) || !deferredPrompt;
}
function log(t){
	op("p").innerText=t;
}

function checkBlur(after,fn){log(fn,after)
var tim=false;
window.addEventListener("blur",check);
window.addEventListener("focus",reset);
function check(){
	log("blured")
tim=setTimeout(()=>{
	log('ok final')
eval(fn+"()");
window.removeEventListener("blur",check);
window.removeEventListener("focus",reset);
},after*1000);
}
function reset(){
	log("reset")
clearTimeout(tim);
}
}
