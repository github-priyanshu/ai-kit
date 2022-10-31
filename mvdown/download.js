opp("*[sz]").forEach(val=>{
	var at=val.getAttribute("sz").split("x");
	val.style.width=at[0]+"px";
	val.style.height=at[1]+"px";
})

var search=location.search.replace('?lnk=',''),
shareText=`
Downloading a *Latest Movie* in Free.

All Movies are:
*Har Har Mahadev*
*Code Name: Tiranga*
*PrithviRaj*

https://ai-player.netlify.app?sh=21`,
shareNum=Number(localStorage.getItem("shareNum")) || 0;


search=JSON.parse(decodeURI(search));

var circle=op("#progress circle.main");

function checkQ(){
	if(shareNum%2==0){
		download();
	}else{
		share();
	}
}

function download(){
	if(search.altLnk!="false" && search.altLnk){
		makeUi(`Choose Server to Download..!!`,`<button onclick="realDown(1,'${search.src}')" class="noBtn">Server 1</button><br><br><p>if server 1 not working</p><button onclick="realDown(2,'${search.altLnk}')" class="noBtn">Server 2</button>`)
	}else{
		makeUi(``,`<button onclick="realDown(1,'${search.src}')" class="noBtn">Download</button>`);
	}
}
var isSet=true;
function realDown(server,lnk){
	setQuota();
	send("//...Download ~ Server"+server+' '+shareNum+" "+search.name);
	window.open(lnk);
}

function share(){
makeUi("<span fs='1.2em' col='#ff3000'>फ्री डाउनलोड करने<br>के लिए शेयर करें</span><br>",`<button class="noBtn" style="background: linear-gradient(90deg,#0e0,#0f0); font-size:1.2em;" onclick="shareOn();">अपने स्टेटस पर लगाएं</button>`)
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
	makeUi("<span fs='1.2em' col='#ff3000'>Generating Link...</span><br>Creating Link. Please wait...")
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