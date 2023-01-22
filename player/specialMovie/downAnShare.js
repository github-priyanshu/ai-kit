var vidDownBtn=op("#vidDown"),
obj={

altLnk: "https://drop.download/gasu0z9zt2dq",
img: "https://static.tnn.in/photo/msid-96753367/96753367.jpg",
name: "Pathaan",
src: "https://web0dev0priyanshu00000.on.drv.tw/www.test/Quit everything bad.mp4",
};

setTimeout(()=>{
	vidDownBtn.style.display='flex';
},60*1000);
/*
*/
function vidDown() {
	if(isDownLoaded()){
		window.open(`https://ai-movie-download.netlify.app?lnk=${JSON.stringify(obj)}`);
	}else{
		openDisturbPan(
		"Download App(1MB) to",
		"Please, download App(1MB) to download the movie.",
		"फिल्म डाउनलोड करने के लिए कृपया पहले ऐप डाउनलोड करें|",
		"Install",
		"#00a173",
		"downloading()"
		);
	}
}

function vidShare(data={title:"Pathaan",text:"Pathaan free *watch and download*",url:"https://ai-player.netlify.app?sh=17"}){
  try{
    navigator.share(data)
  }catch{
    copyToClipboard(data.url);
    alert("Url Copied!")
  }
  /*data={ title,text,url }*/
}