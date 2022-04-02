log('file loaded')
var int=false;
function disableProInt(toOpen=false){
	clearTimeout(int);
	int=setInterval(()=>{
		log("came to disable")
		if(document.body.style.overflow=='hidden'){
			clearTimeout(int);

			document.body.style.overflow="";
			var baap=op("#_m8beems").parentElement.parentElement;
			baap.style.display="none";

			if(toOpen){	
				try{op("#_m8beems iframe ~ div").click();}catch{}
			}
			baap.remove();
		}
	},100);
}