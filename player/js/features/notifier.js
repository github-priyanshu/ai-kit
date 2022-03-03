/*var noti=op(".noti"),timxx=false,
conN=true,
notiTop=op(".noti .top"),
seen=localStorage.getItem("notifier1") || false,
notifier1ClTim=Number(localStorage.getItem('notifier1ClTim')) || 0;

notiTop.onclick=()=>{
	noti.classList.toggle("active");
	clearTimeout(timxx);
	// localStorage.setItem("notifier1",true);
	if(!noti.classList.contains("active") && conN){
		send("/...Closed Notifier");
		localStorage.setItem("notifier1ClTim",++notifier1ClTim)
	}
}

timxx=setTimeout(()=>{
	if(!seen && aiLoadedNum >2 && notifier1ClTim<2){
		noti.classList.add("active");
	}
},1000);

function openNotiLnk(el){
	localStorage.setItem("notifier1",true);
	noti.classList.remove('active')
	conN=false;
	el.children[0].click()
}*/