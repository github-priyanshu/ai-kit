var pan=op(".pan"),
a;
function begin(step=1){
	a=new main(step);
}

class main{
	#s={
		step: 1,
		totalSteps:4,
	}
	data=[
		{
			lnk: "https://youtube.com/channel/UCGZCRAfcylnkYP3V65r6fyQ",
			m1: "<p col='#444'>Just few steps away...</p>",
			m2: `<p col="#ff3000" class="warn">Don't Press <b>Back Button</b></p>`,
			s: `<div col="#777" fs="2em">STEP 1</div>`,
			button: `<button class="noBtn mainBtn" goto="2" bg="#f00" col="#fff">SUBSCRIBE</button>`,
			m3: `<p col="#222">Do subscribe on <u>YouTube</u> to pass the first step.</p>`,
			time: 9,
		},
		{
			lnk: "https://instagram.com/web_dev.priyanshu?igshid=YmMyMTA2M2Y=",
			m1: "<p col='#444'>Just few steps away...</p>",
			m2: `<p col="#ff3000" class="warn">Don't go <b>Back</b></p>`,
			s: `<div col="#777" fs="2em">STEP 2</div>`,
			button: `<button class="noBtn mainBtn" goto="3" bg="#0099ff" col="#fff">FOLLOW</button>`,
			m3: `<p col="#222">Follow us on <u>Instagram</u> to pass the 2<sup>nd</sup> step.</p>`,
			time: 7,
			alter: `<button class="noBtn altBtn" num="0" goto="3">Don't have Insta</button>`,
		},
		{
			lnk: "https://t.me/aiplayermovies",
			m1: "<p col='#444'>Just 2 steps away from premium</p>",
			m2: `<p col="#ff3000" class="warn">Don't Press <b>Back Button</b></p>`,
			s: `<div col="#777" fs="2em">STEP 3</div>`,
			button: `<button class="noBtn mainBtn" goto="4" bg="#0f0" col="#fff">Join Now</button>`,
			m3: `<p col="#222">Join us on <u>Telegram</u> for 3<sup>rd</sup> step</p>`,
			time: 6,
			alter: `<button class="noBtn altBtn" num="1" goto="4">no Telegram</button>`,
		},
		{
			lnk: "https://wa.me/?text=Hey!%20I%20watch%20here%20daily%20releas…20link%20for%20free.%20*HTTPS://AI-PLAYER.NETLIFY.APP?SH=17*",
			m1: "<p col='#444'>Last & Final step</p>",
			m2: `<p col="#ff9900">Just go simple to share</p>`,
			s: `<div col="#777" fs="2em">STEP 4</div>`,
			button: `<button class="noBtn mainBtn" goto="5" bg="linear-gradient(90deg,#0f0,#090)" col="#fff">Share</button>`,
			m3: `<p col="#222"><u>Share</u> to more than 2 people to get <b>Premium</b></p>`,
			time: 8,
		},
		{
			lnk: "",
			m1: "<p col='#444'>Congrates now you are Pro* user</p>",
			m2: `<p col="#f00" class="warn">Use below button only</p>`,
			s: `<div col="#777" fs="2em">DONE</div>`,
			button: `<button class="noBtn" onclick="goPro();" bg="#0099ff" onclick="location.replace('https://ai-player.netlify.app#pro')" col="#fff">Click Me*</button>`,
			m3: `<p col="#222">Enjoy 1 week premium for free.</p>`,
		}
	]

	alt(n){
		var lnk=["https://youtube.com/channel/UCjvd4eGiqjWbh_mz4_TFU-g","https://youtube.com/c/AwesomeCode"],
		n=Number(op(".altBtn").getAttribute("num")),
		step=Number(op(".altBtn").getAttribute("goto")),
		html=`<p col='#444'>Just few steps away...</p><p col="#ff3000" class="warn">Don't Press <b>Back Button</b></p><div col="#777" fs="2em">STEP (alt)</div><button class="noBtn mainBtn" bg="#f00" col="#fff" goto='${step}'>SUBSCRIBE</button><p col="#222">Do subscribe on <u>YouTube (alt)</u> to pass this alter step.</p>`;
		pan.innerHTML=html;
		resetFormat();
		op(".mainBtn").onclick=()=>{
			this.#s.step=step;
			checkBlur(5,"next");
			window.open(lnk[n]);
		}
	}

	constructor(){
		this.make(1);
	}

	next(){
		var n=this.#s.step;
		this.#s.totalSteps>n-1?this.make(n):this.#givePro();
		send("Step: "+n);
	}

	#givePro(){
		var proTimEnd=new Date().getTime()+(7*24*3600*1000);
		localStorage.setItem("proTimEnd",proTimEnd);
		this.make(5);
		send("/...GivenPro");
	}

	make(n){
		setStep(n);
		var data=this.data[n-1];

		var html=data.m1+data.m2+data.s+data.button+data.m3 +(data.alter? data.alter : "");

		pan.innerHTML=html;

		resetFormat();
		try{
			op(".mainBtn").onclick=()=>{
				this.#s.step=Number(op(".mainBtn").getAttribute('goto'));
				checkBlur(data.time,"next");
				window.open(data.lnk);
			}
		}catch{}

		var altBtn=op(".altBtn");
		if(altBtn){
			altBtn.onclick=()=>{
				this.alt();
			}
		}		
	}

}


function checkBlur(time,fn){
	log(time,fn)

  var tim=false;

  function check(){
  	console.warn("check");                           
  	clearTimeout(tim);


	  window.addEventListener("blur",check);
	  setTimeout(()=>{window.addEventListener("focus",reset);},500)

    tim=setTimeout(()=>{
      a[fn]();
      window.removeEventListener("blur",check);
      window.removeEventListener("focus",reset);
    },time*1000);
  }
  function reset(){
  	console.warn("reset")
    clearTimeout(tim);
  }
  check();
}

function goPro(){
	if(localStorage.getItem("proTimEnd")){
		location.replace("https://ai-player.netlify.app#pro");
	}else{
		location.reload();
	}
}

function send(data,name=getDefaultName()){
	makeForm("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdMAqTjnBkkh2barK-Y9wqM0dVGvQiB-HSXerkJHGS1WcxC8A/formResponse",{
		"entry.1038083523": name,
		"entry.733764757": data,
	})
}
send("Came");

function setStep(n){
	log(n);
	localStorage.setItem("step",n);
}
var stepDone=Number(localStorage.getItem("step"));

if(stepDone){
	op("button[onclick='begin();']").click();
	a.make(stepDone);
}
