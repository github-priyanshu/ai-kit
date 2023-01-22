var lastDate=localStorage.getItem("specialLastDate"),
nowDate=new Date().getDate()+"/"+(new Date().getMonth()+1),
ctNm=Number(localStorage.getItem("specialCtNm") || 0),
video=op("#mainVid"),
downloadedNow=false,
disturbTime=4;

video.oncontextmenu=(e)=>{e.preventDefault()}

if(lastDate!=nowDate){
	ctNm=0;
	localStorage.setItem("specialLastDate",nowDate);
	localStorage.setItem("specialCtNm",ctNm);
}
var task=[downAppToCont,share,showAppAd,showAppAd,showAppAd];

setInterval(checkDisturb,10*1000);//change the duration to 3 min

function checkDisturb(){
	log("ctNm "+ctNm);
	log("ctNm "+ctNm/disturbTime*video.duration);
	if(video.currentTime>=((ctNm+1)/disturbTime*video.duration)-300){
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
https://ai-player.netlify.app

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
		apAd.showAd();
		video.webkitExitFullscreen();
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
	video.pause();
	back.disable();
	video.webkitExitFullscreen();

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
}
function closeDisturbPan(){
	opp(".disturb").forEach(val=>{val.remove()});
	back.enable();
}

function isDownLoaded() {
  return (window.matchMedia('(display-mode: standalone)').matches) || !deferredPrompt;
}

function checkBlur(after,fn){
var tim=false;
window.addEventListener("blur",check);
window.addEventListener("focus",reset);
function check(){
tim=setTimeout(()=>{
eval(fn+"()");
window.removeEventListener("blur",check);
window.removeEventListener("focus",reset);
},after*1000);
}
function reset(){
clearTimeout(tim);
}
}
