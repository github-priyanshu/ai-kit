var noti=op(".noti"),timxx=false,
conN=true,
notiTop=op(".noti .top"),
seen=localStorage.getItem("notifier2") || false,
notifier2ClTim=Number(localStorage.getItem('notifier2ClTim')) || 0;

notiTop.onclick=()=>{
	noti.classList.toggle("active");
	clearTimeout(timxx);
	if(!noti.classList.contains("active") && conN){
		send("/...Closed Notifier");
		localStorage.setItem("notifier2ClTim",++notifier2ClTim)
	}
}

timxx=setTimeout(()=>{
	if(!seen && aiLoadedNum >2 && notifier2ClTim<2){
		noti.classList.add("active");
	}
},1000);

function openNotiLnk(el){
	localStorage.setItem("notifier2",true);
	noti.classList.remove('active')
	conN=false;
	el.children[0].click()
}
resetFormat();