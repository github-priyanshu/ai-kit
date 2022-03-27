var iplLoadedNum=localStorage.getItem("iplLoadedNum");

if(iplLoadedNum){
	iplLoadedNum=Number(iplLoadedNum)+1;
}else{
	iplLoadedNum=1;
}
localStorage.setItem("iplLoadedNum",iplLoadedNum);
log(iplLoadedNum);

function send(data="",name){
	name=getDefaultName(name);
	var html=makeForm("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdVME0SqDFdmGLmES3zmVxrJD9nnmO1cd4C8piWxuBnkB-_zQ/formResponse",{
		"entry.1222768142":name,
		"entry.1171946339":data
	});
}
function sendUnique(data="",name){
	name=getDefaultName(name);
	var html=makeForm("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfkhC-YzxVikv2mJkzEQMDnPTHwacO6iAyqHLxeRZ9SeWbsw/formResponse",{
		"entry.470001780":name,
		"entry.244320253":data
	});
}

var downloaded="";
if(isDownLoaded() && !localStorage.getItem("iplDownSent")){
	downloaded='downloaded';
	localStorage.setItem("iplDownSent",true);
}

function isDownLoaded() {
  return (window.matchMedia('(display-mode: standalone)').matches);
}

/*at last*/
setTimeout(send,2000);

function getDefaultName(name){
	var dv=navigator.appVersion.split(")")[0].replace("5.0 (","").replace("Linux; Android","An..");
	return iplLoadedNum+":"+ dv;
}

/*TODAY UNIQUE VIEWER*/
var lastOpDate=localStorage.getItem("lastOpDate") || "today",
todayx=new Date().toDateString();
if(lastOpDate!=todayx){
	localStorage.setItem("lastOpDate",todayx);
	log("sengind for today");
	setTimeout(()=>{
		sendUnique(getDefaultName());
	},2000)
}