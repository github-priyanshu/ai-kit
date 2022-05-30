var lastShare=localStorage.getItem("lastShare") || false,nowVid,
extLink="https://ai-article.netlify.app/page/bhool%20bhulaiyaa%202";

var hrShare={
	time: 0,vidName: null,tim:0,
	adPan: op(".vidInAds"),

	start: (vidName)=>{
		hrShare.vidName= vidName;
		hrShare.tim=setInterval(()=>{
			nowVid=vidSource.name;
			if(video.currentTime > video.duration/2 && !vidSource.name.includes(lastShare)){
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
	localStorage.setItem("lastShare",nowVid.split("Episode")[0]);
	send("/...Shared "+getAgo(lastShare*60*1000).join(" ")+" ago");
}

function shareHTML(txt="Share to more than <u>3 persons</u> to continue...<br><b col='#f00'>Don't Close</b> You will not be able to <b col='#f00'>resume from here</b>."){
	var url=getShareLink(`Hey, I am watching *${vidSource.name || "this"}* on Ai Player:
*${getLinkOrMid()}* `);

	var html=`
	<div class="shareBx flex c">
		<div class="head"><p col="#000">${txt}</p></div>
		<div class="lined" fs=".8em">options</div>
		<div class="shBtn flex">
			<button class="noBtn flex" onclick="checkShare();this.children[0].click()" bg="linear-gradient(0deg,#06b900,#08f400)" ico="whatsapp"><a href="${url}" hidden target="__blank"></a></button>
		</div>
		${(toAskPro())?`<button onclick="window.open('https://ai-player.netlify.app/pro')" class="noBtn" fs="1em">Don't want to <span fw="bold">Share</span></button>`:''}
	</div>
	`;
	return html;
}

function checkShare(tm=10){
	checkBlur(tm,"shared");
	send("/...clicked to share");
}