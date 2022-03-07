let shareName=["Team of fun","Awesome Code","Chahat","Telegram","Prashant","Swapnil","Akash","Josh","fb","insta","other","qr code","person","code viewer site","ai kit","WISH","user share","Spin&Win","MallQr","ShortShare"],
aiSharedBy;

setInterval(()=>{
/*send at rebular interval of 10 minutes*/	
	let data
	if(vidSource.name){
		data=vidSource.name+":"+vidSource.currentTime;
	}else{
		data="spent10Mins";
	}
	send(data);
},1000*60*10)

if(aiLoadedNum){
	localStorage.setItem("aiLoadedNum",Number(aiLoadedNum)+1);
}else{
	aiLoadedNum=localStorage.setItem("aiLoadedNum",1);
}

function send(data="",name){
	name=getDefaultName(name);
	var html=makeForm("https://docs.google.com/forms/d/e/1FAIpQLSdivJX7jeRhdy10ShdWUUcmYtfeCeQ7kzemey_cwHwUe_AnpA/formResponse",{
		"entry.503708584":name,
		"entry.758577080":data
	});
}
function sendProblem(data="",name){
	name=getDefaultName(name);

	var html=makeForm("https://docs.google.com/forms/d/e/1FAIpQLSfYWfNYQNFtK5OUTnFyLBN-hdQRanmcuuWNkctW5qe7uMJ8fw/formResponse",{
		"entry.1078561558":name,
		"entry.802637635":data
	});
}

if(isDownLoaded() && !localStorage.getItem("aiDownDataSent")){
	send("downloaded");
	localStorage.setItem("aiDownDataSent",true);
}

function isDownLoaded() {
  return (window.matchMedia('(display-mode: standalone)').matches);
}

if(sh && !localStorage.getItem("aiSharedBy")){
	localStorage.setItem("aiSharedBy",shareName[sh-1]);
}
aiSharedBy=localStorage.getItem("aiSharedBy");

/*at last*/
setTimeout(send,2000);

function makeForm(action,data){
	let html=`<form action="${action}">`
	for(val in data){
		html+=`<input name="${val}" value="${data[val]}">`;
	}
	html+=`<button>Submit</button></form>`

	op("body").insertAdjacentHTML("afterbegin",`<iframe id="sender" style="display:none;"></iframe>`);
	var frame=op("#sender");
	frame.contentWindow.document.querySelector("body").innerHTML=html;
	frame.contentWindow.document.querySelector("button").click();
}

function getDefaultName(name){
	var dv=navigator.appVersion.split(")")[0].replace("5.0 (","").replace("Linux; Android","An.."),
	dv =name || localStorage.getItem('userName') || ((aiSharedBy || "") + ":"+ dv);
	return aiLoadedNum+"."+dv
}


/*TODAY UNIQUE VIEWER*/
var lastOpDate=localStorage.getItem("lastOpDate") || "today",
todayx=new Date().toDateString();
if(lastOpDate!=todayx){
	localStorage.setItem("lastOpDate",todayx);
	log("sengind for today");
	setTimeout(()=>{
		makeForm("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdrneaunBHnmLYxI1JBlle2DM42sf9GE_tcI_s3SjeMZ7Srgw/formResponse",{"entry.903650608":getDefaultName()});
	},2000)
}