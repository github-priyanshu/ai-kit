/*THIS PAGE WILL BE ATTACHED TO BOTTOM MOST OF THE PAGE*/
if(!app){
	switchUI();
}else{
	openWindow(app);
}

function openWindow(n){
	var d=tools[n];
	if(d[2]){
		frame=op("#iframe");
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
		var frame=op("#iframe");
		frame.insertAdjacentElement("afterend",frame.cloneNode(true));
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
	},200);
  op(".uiPan").classList.remove("active");
  op(".win").classList.add("active");
}