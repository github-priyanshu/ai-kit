var srh=location.search.replace("?",'');
srh=srh.split("&");
var app;
if(srh.length>0 && srh[0].includes("=")){
	for(let val of srh){
		var t=val.split("=");
		try{eval(`${t[0]} = "${t[1]}"`);}catch(err){log(err)}
	}
}

function resetLine() {
	opp(".border").forEach(val=>{
		try{val.style.width=val.getAttribute("w")+"%"}catch{}
		try{val.style.margin=val.getAttribute("m")+"px 0"}catch{}
	})
}