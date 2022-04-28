var noti=op(".noti"),timxx=false,
conN=true,
notiTop=op(".noti .top"),
seen=localStorage.getItem("notifier3") || false,
notifier3ClTim=Number(localStorage.getItem('notifier3ClTim')) || 0;

notiTop.onclick=()=>{
	noti.classList.toggle("active");
	clearTimeout(timxx);
	if(!noti.classList.contains("active") && conN){
		send("/...Closed Notifier");
		localStorage.setItem("notifier3ClTim",++notifier3ClTim)
	}
}

timxx=setTimeout(()=>{
	if(!seen && aiLoadedNum >2 && notifier3ClTim<2){
		noti.classList.add("active");
	}
},1000);

function openNotiLnk(el){
	localStorage.setItem("notifier3",true);
	noti.classList.remove('active')
	conN=false;
	el.children[0].click()
}
resetFormat();

if(!toAskPro()){
	noti.style.display="none";
}