var shTime=10000,
lastShare=0,
aadsLast=localStorage.getItem("aadsLast") || "not today";

var hrShare={
	time: 0,vidName: null,tim:0,
	adPan: op(".vidInAds"),

	start: (vidName)=>{
		hrShare.vidName= vidName;
		hrShare.tim=setInterval(()=>{
			if(video.currentTime > video.duration/2 && lastShare!=video.src){
				hrShare.showShare();
			}
		},15*1000);
	},
	showShare:()=>{
		playing?playPause():'';
		hrShare.adPan.classList.add("active");
		hrShare.adPan.innerHTML=(aadsLast!=new Date().toDateString())? adHtml():shareHTML();
		resetFormat();
		send("/...Shown interval");
		lastShare=video.src;
	},

	closeShare:()=>{
		hrShare.closeReal();
	},
	closeReal:()=>{
		playPause();
		hrShare.adPan.classList.remove("active");
		clearInterval(hrShare.tim);
	},

	end:()=>{
		hrShare.closeReal();
		hrShare.time=0;
		hrShare.vidName=null;
	}
}

function shared(){
	hrShare.closeReal();
	send("/...Shared");
}
function adHtml(){
	var html=`<div class="shareBx flex c" style="border: none;">
		<div class="head"><p col="#ff0055" class="lined">INTERVAL</p></div>
		<div class="w100p flex">${aadsHtml}</div>
		<div class="shBtn" fs="1.1em" style="color: rgb(17, 17, 17);font-size: 1.1em;position: absolute;color: #000;background: #fff;pointer-events: none;bottom: 10px;">
			Spend at least <b>5s</b> in the above website.
		</div>
	</div>`;
	checkBlur(4,"visitedaad");
	return html;
}
function visitedaad(){
	localStorage.setItem("aadsLast",new Date().toDateString());
	hrShare.closeReal();
	send("/...Clicked Ad");
}

function shareHTML(txt="Share to continue..."){
	var msg=`Hey, I am watching ${vidSource.name || "this"} on Ai Player ${getLinkOrMid()}`;
	msg=encodeURI(msg);
	var html=`
	<div class="shareBx flex c">
		<div class="head"><p col="#ff0055">${txt}</p></div>
		<div class="lined" fs=".8em">options</div>
		<div class="shBtn flex">
			<button class="noBtn flex" onclick="checkShare();shareCurent();" bg="linear-gradient(90deg,#ff6c00,#f40051)" ico="send"></button>
			<button class="noBtn flex" onclick="checkShare();this.children[0].click()" bg="linear-gradient(0deg,#06b900,#08f400)" ico="whatsapp"><a href="https://wa.me/?text=${msg}" hidden target="__blank"></a></button>
		</div>
	</div>
	`;
	return html;
}

function checkShare(){
	checkBlur(8,"shared");
	send("/...clicked to share");
}

/*show a-ads on main page*/
if(aadsLast!=new Date().toDateString()){
	try{op("#mnaAd").innerHTML=aadsHtml;}catch{}
}
op(".listPan .moviePan:nth-child(3)").insertAdjacentHTML("afterend",`<div class="w100p flex">${aadsHtml}</div>`);