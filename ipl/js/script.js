function resetLine() {
	opp(".border").forEach(val=>{
		try{val.style.width=val.getAttribute("w")+"%"}catch{}
		try{val.style.margin=val.getAttribute("m")+"px 0"}catch{}
	})
}

function shareApp(data){
  log(data)
  try{
    navigator.share(data)
  }catch{
    copyToClipboard(data.url);
    alert("Link Copied! Now you can paste the link and share.");
  }
  /*data={ title,text,url }*/
}

resetFormat();