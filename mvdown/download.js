opp("*[sz]").forEach(val=>{
	var at=val.getAttribute("sz").split("x");
	val.style.width=at[0]+"px";
	val.style.height=at[1]+"px";
})

var search=location.search,
shareText=`
Downloading a *Latest Movie* in Free.
Many Popular Movies are here.

https://ai-player.netlify.app?sh=21

Some Populars are:
*Khuda Hafiz 2*
*PrithviRaj*
*RRR*
*KGF 2*
*The Kashmir Files*

https://ai-player.netlify.app?sh=21`,
shareNum=Number(localStorage.getItem("shareNum")) || 0;


search=search.split("=")[1];

var circle=op("#progress circle.main");

function checkQ(){
	if(shareNum%2==0){
		download();
	}else{
		share();
	}
}

function download(){
	makeUi("<p>Click the button download now.</p>",`<button onclick="realDown()" class="noBtn">Download</button>`)
}
var isSet=true;
function realDown(){
	setQuota();
	send("//...Download ~ "+shareNum+" "+search);
	window.open(search);
}

function share(){
makeUi("<span fs='1.2em' col='#ff3000'>Link Created but Quota over</span><br><p>You can get 2 quota in<br>free by Sharing. </p><h3>Click on share button<br>and share to your status.</h3>",`<button class="noBtn" style="background: linear-gradient(90deg,#0e0,#0f0)" onclick="shareOn();">Share to Status</button>`)
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
}
function progressEnd(){
	log("Progress ended")
	checkQ();
}

function startProgress(){
	circle.classList.add("active");
	makeUi("<span fs='1.2em' col='#ff3000'>Generating Link...</span><br>Your link is being created. Please wait...")
	setTimeout(progressEnd,10000)
}
setTimeout(startProgress,2000)
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