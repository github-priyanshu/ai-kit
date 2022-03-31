log('file loaded')
var int=false;
function disableProInt(){
	clearTimeout(int);
	int=setInterval(()=>{
		log("came to disable")
		if(document.body.style.overflow=='hidden'){
			document.body.style.overflow="";
			var baap=op("#_m8beems").parentElement.parentElement;
			baap.style.display="none";

			clearTimeout(int);
			setTimeout(()=>{
				baap.remove();
			},5000)
		}
	},100);
}