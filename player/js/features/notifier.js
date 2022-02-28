var noti=op(".noti"),timxx=false,
conN=true,
notiTop=op(".noti .top");

notiTop.onclick=()=>{
	noti.classList.toggle("active");
	clearTimeout(timxx);
	if(!noti.classList.contains("active") && conN){
		send("/...Closed Notifier");
	}
}
timxx=setTimeout(()=>{
	noti.classList.add("active");
},5000);