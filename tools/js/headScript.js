var srh=location.search.replace("?",'');
srh=srh.split("&");
var app;
if(srh.length>1){
	for(let val of srh){
		var t=val.split("=");
		try{eval(`${t[0]} = "${t[1]}"`);}catch{}
	}
}