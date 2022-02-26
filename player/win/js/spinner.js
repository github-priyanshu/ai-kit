var spinner,spinBx=op(".spinP");

/*SPINNING CODES*/
var prior=Number(localStorage.getItem("prior")) || 2,
priNum=Number(localStorage.getItem("priNum")) || 0,
email=localStorage.getItem("email") || false,
chances=Number(localStorage.getItem("chances")) || 1,
spinTime=Number(localStorage.getItem("spinTime")) || 0;

var result={
	elem: op(".resultBox"),
	show:()=>{
		result.elem.classList.add("active");
	},
	hide:()=>{
		result.elem.classList.remove("active");
	}
}

function spin(btn,pri=prior){
	btn.disabled=true;
	var roundTime=1;
	var productChose=(pri-1)*3+Math.floor(Math.random()*3)+1;
	addSpinAnim(roundTime,productChose);
	chances--;
	localStorage.setItem("chances",chances);
	changePriority();
}
function changePriority(){
	var p=[2,1,2,3,3,2,1,2];
	prior=p[priNum++];
	if(priNum>=p.length){
		priNum=0;
	}
	localStorage.setItem("prior",prior);
	localStorage.setItem("priNum",priNum);
	log(prior);
}
	log(prior);

function addSpinAnim(roundTime,productChose){
	var allImg=opp(".spin .space"),spinInt=false,spinNum=0;
	spinner.classList.add('active');

	spinInt=setInterval(()=>{
		try{op(".spin .space.active").classList.remove("active")}catch{}
		allImg[spinNum++].classList.add("active");

		if(spinNum==9){
			spinNum=0;
			roundTime--;
		}
		if(roundTime==0 && spinNum==productChose){
			clearInterval(spinInt);
			setTimeout(()=>{wonItem(productChose)},500);
		}
	},500);
}
function wonItem(p){
	var userN=(5- spinTime)*100+Math.ceil(Math.random()*75);
	if(spinTime<4){spinTime++;}
	localStorage.setItem("spinTime",spinTime);
	var html=`<p col="#222"><span fs="1.3em" col="#c034ff">Hurray!</span> you got a lucky code for:</p>
	<img src="win/img/product/${p}.png" width="200px" style="margin: 10px; border-radius: 5px; animation: wined 1s cubic-bezier(.68,-0.55,.27,1.55) forwards;">
	<p col="#ff008f">Among <span fs="1.2em">${userN}</span> users</p><div class="hap" style="--n: 1; left: 20px; top: 20px;"></div><div class="hap" style="--n: 2; left: 240px; top: 30px;"></div><div class="hap" style="--n: 3; left: 60px; bottom: 20px;"></div>
	<button class="noBtn btn" onclick="askEmail();">Next</button>
	`;
	spinBx.innerHTML=html;
	resetFormat();
}

function askEmail(){
	if(!email){
		var html=`<p class="texCen" fs="1.2em" col="#333" style="padding: 10px">Your personal <u fw="bold"><span col="#c034ff">Lucky</span> Verification Code</u> will be sent on your email.</p>
			<input type="email" id="email" placeholder="Enter your email">
			<button class="noBtn btn" onclick="saveEmail()">Get Code</button>
		`;
		spinBx.innerHTML=html;
		resetFormat();
	}else{
		result.show();
		makeSpinnerSpace();
	}
}

function saveEmail(){
	var em=op("#email").value;
	if(em){
		email=em;
		localStorage.setItem("email",email);
		result.show();
		makeSpinnerSpace();
	}else{
		alert("Email field is empty.");
	}
}


/*MAKING SPINNER*/
function makeSpinnerSpace(){
	var btnHtml="";
	if(chances>0){
		btnHtml=`<div class="txt texCen" col="#222">You have <span col="#000" fw="bold">${chances} free spin</span></div>
        <button class="noBtn btn" onclick="spin(this)">Spin Now</button>`;
	}else{
		btnHtml=`<div class="txt texCen" fs="#1.1" col="#222">You have <b>share to 1 person</b> to earn free chance.</div>
        <button class="noBtn btn" onclick="share()">Earn 1 Chance</button>`;		
	}
	var html=`<div class="spin flex">`;
	for(let i=1; i<=9; i++){
		html+=`<div class="space"><img src="win/img/product/${i}.png" n="${i}" style="--i: ${i};"></div>`;
	}
	html+=`</div>
      <div class="btnPan flex c">
        ${btnHtml}
      </div>`;
	spinBx.innerHTML=html;
	spinner=op(".spin");
}
makeSpinnerSpace();

function share(){
	alert("assuming that you are developer: save time: got a chance to spin");
	shared();
}
function shared(){
	chances=1;
	makeSpinnerSpace();
}