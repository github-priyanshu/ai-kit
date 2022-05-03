// addScript("js/disturb/notifier.js");

if(checkPro()){
	addScript("js/passive/makePro.js");
}else{
	addScript("js/disturb/1hrShare.js");
	if(aiLoadedNum>2){
		//addScript("js/disturb/vignetteAd.js");
		//addScript("js/disturb/proAd.js");
	}
}

function disturbOnVidStart(){
	try{hrShare.start(vidSource.name);}catch{}
}
function disturbOnVidSet(){
	if(video.getAttribute("mid")==96 || 95 || 43 || 76 || 78){/*CHECKING IF KGF IS PLAYED TO SHOW AD*/
		try{ _kgfAd(midx);}catch{};
	}
}
