var lastShare=Number(localStorage.getItem("lastShare")) || 0,nowTime,
extLink="https://youtube.com/watch?v=_dDIxKDDUpQ";

var hrShare={
	time: 0,vidName: null,tim:0,
	adPan: op(".vidInAds"),

	start: (vidName)=>{
		hrShare.vidName= vidName;
		hrShare.tim=setInterval(()=>{
			nowTime=new Date().getTime()/(1000*60);
			log(nowTime,lastShare);
			if(video.currentTime > video.duration/2 && lastShare+20<nowTime){
				hrShare.showShare();
				clearInterval(hrShare.tim);
			}
		},15*1000);
	},
	showShare:()=>{
		playing?playPause():'';
		hrShare.adPan.classList.add("active");
		hrShare.adPan.innerHTML=shareHTML();
		resetFormat();
		send("/...Shown interval");
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
	log(nowTime)
	localStorage.setItem("lastShare",nowTime);
	send("/...Shared "+getAgo(lastShare*60*1000).join(" ")+" ago");
}

function shareHTML(txt="Share to more than <u>3 persons</u> to continue..."){
	var url=getShareLink(`Hey, I am watching *${vidSource.name || "this"}* on Ai Player:
*${getLinkOrMid()}* `);

	var html=`
	<div class="shareBx flex c">
		<div class="head"><p col="#ff0055">${txt}</p></div>
		<div class="lined" fs=".8em">options</div>
		<div class="shBtn flex">
			<button class="noBtn flex" onclick="checkShare();shareCurent();" bg="linear-gradient(90deg,#ff6c00,#f40051)" ico="send"></button>
			<button class="noBtn flex" onclick="checkShare();this.children[0].click()" bg="linear-gradient(0deg,#06b900,#08f400)" ico="whatsapp"><a href="${url}" hidden target="__blank"></a></button>
		</div>
		${(toAskPro())?`<button onclick="window.open('https://ai-player.netlify.app/pro')" class="noBtn" style="border-radius: 2px;color: #fff; background: #0099ff"><span fw="bold">Remove Share</span> forever</button>`:''}
	</div>
	`;
	return html;
}

function checkShare(){
	checkBlur(8,"shared");
	send("/...clicked to share");
}