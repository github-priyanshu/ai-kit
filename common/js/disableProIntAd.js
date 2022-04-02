log('file loaded')
var int=false;
function disableProInt(toOpen=false){
	clearInterval(int);
	int=setInterval(()=>{
		log("came to disable"+toOpen)
		if(document.body.style.overflow=='hidden'){
			clearInterval(int);

			document.body.style.overflow="";
			var baap=op("#_m8beems").parentElement.parentElement;
			baap.style.display="none";

			if(toOpen){
				try{op("#_m8beems iframe ~ div").click();}catch{}
			}
			baap.remove();
		}
	},100);
	setTimeout(()=>{
		clearInterval(int);
	},20000)
}