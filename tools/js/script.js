/*THIS PAGE WILL BE ATTACHED TO BOTTOM MOST OF THE PAGE*/
if(app){
	openWindow(app);
}else{
	switchUI();
}

function loadedWin(elem){
	loader.hide();
}

function openWindow(n){
	send("Opened: " +n);
	let d=tools[n];
	if(d[2]){
		frame=op("#iframe");
		loader.show();
		frame.src=d[0];
		frame.setAttribute("name",n);
		frame.setAttribute("desc",d[1])
		switchWin();
	}else{
		switchUI();
		setTimeout(()=>{
			location.assign(d[0]);
		},200)
	}
}

window.addEventListener("hashchange",(e)=>{
	if(location.hash!="#app"){
		switchUI();
		let frame=op("#iframe");
		frame.insertAdjacentHTML("afterend","<iframe id='iframe' onloadstart='loadedWin(this);'></iframe>");	
		frame.remove();
	}
})
function switchUI(){
  op(".uiPan").classList.add("active");
  op(".win").classList.remove("active");
}
function switchWin(){
	setTimeout(()=>{
	  location.assign(document.URL.split("#")[0]+"#app");
	},1000);
  op(".uiPan").classList.remove("active");
  op(".win").classList.add("active");
}

function send(data="Loaded",name=getDefaultName()){
	makeForm("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZr8Afwsp7DCCac7kBdBfgy6hRzBy97WYAP0ri3YSgfu9cCg/formResponse",{
		"entry.1520339883":name,
		"entry.524320178":data
	});
}
send();
