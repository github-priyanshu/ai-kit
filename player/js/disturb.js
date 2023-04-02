/*THESE ARE SOME LOCALSTORATE VARIABLES*/
// 'notifier3ClTim,vidErrorCt,lastShare,vidHistory,aiCurVid,lastOpDate,aiSharedBy,downloadExperience,lastIntAdTime,step,gotPro1,aiDownDataSent,aiLoadedNum,lastKgf'
// addScript("js/disturb/notifier.js");

if(checkPro()){
	addScript("js/passive/makePro.js");
}else{
	addScript("js/disturb/1hrShare.js");
	if(aiLoadedNum>2){
//		addScript("js/disturb/vignetteAd.js");
//		addScript("js/disturb/proAd.js");
		
		setTimeout(()=>{
			addScript("js/disturb/after30minAd.js");
		},30*60*1000)
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
