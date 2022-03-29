var share={
	el: op(".shareBox"),
	time: 20,
	show: ()=>{
		share.el.classList.add("active");
	},
	hide: ()=>{
		share.el.classList.remove("active");
	},
	checkShare: ()=>{
		checkBlur(10,"share.shared");
	},
	shared:()=>{
		share.hide();
		send("/...Shared");

		share.time+=30;
		setTimeout(share.show,share.time*60*1000);
	},
	sshare: ()=>{
		shareApp({title: "LIVE IPL",text: "I am watching live *IPL* in *FREE*. Click the below link:", url: "https://ai-ipl.netlify.app"});
	},
};

setTimeout(share.show,share.time*60*1000);