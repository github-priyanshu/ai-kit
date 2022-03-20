/*PROPELLAR ADS FUNCITONS*/
var onPlayAd=false;
function openProAd(){	
	if(aiLoadedNum>1 && !onPlayAd){
		onPlayAd=true;
		log("open");
		setTimeout(()=>{
			makeScript({"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4952593"});
		},1000)
	}
}
setTimeout(openProAd,5000);