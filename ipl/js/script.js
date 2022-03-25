function resetLine() {
	opp(".border").forEach(val=>{
		try{val.style.width=val.getAttribute("w")+"%"}catch{}
		try{val.style.margin=val.getAttribute("m")+"px 0"}catch{}
	})
}