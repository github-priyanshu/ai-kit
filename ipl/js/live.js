var tohide=opp(".body"),
livePan=op(".liveVid"),
isFs=false,
fsBtn=op("#fsBtn"),
btnTxt="Exit Full";


function fullScr(el){
	log(el)
	tohide.forEach(val=>{val.classList.toggle("hidden")});
	livePan.classList.toggle("fullScr");
	el.innerHTML=btnTxt;
	btnTxt="Full Screen"

	applyFullEff();
}

/*apply all the effects of full screen*/

function applyFullEff(){
	if(isFs){
		document.exitFullscreen();
	}else{
		document.body.requestFullscreen({navigationUI: "hide"});
	}
	isFs=!isFs
	try{screen.orientation.lock("landscape-primary");}catch{}
}


/*screen rotate for get full screen*/
screen.orientation.addEventListener('change', function(e) { autoFullScr(); })

function autoFullScr(){
	if(screen.orientation.angle%180==0 && videoApplied && fullScr){
		fsBtn.click();
	}else if(screen.orientation.angle%180!=0 && videoApplied && !fullScr){
		fsBtn.click();
	}
}
