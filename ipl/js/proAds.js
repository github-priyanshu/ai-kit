var proIntAdList=[
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4977939"},
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4977940"},
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4977941"},
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4977942"},
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4977943"},
];

var lastIntAdTime=localStorage.getItem("lastIntAdTime") || 0;
lastIntAdTime=Number(lastIntAdTime);

function openProAd(){
	var nowTime=new Date().getTime()/1000;
	log(nowTime)

	if(lastIntAdTime+120 < nowTime && proIntAdList.length){
		lastIntAdTime=nowTime;
		try{disableProInt(proIntAdList.length==5? true:false);}catch{}

		makeScript(proIntAdList.shift());
		

		localStorage.setItem("lastIntAdTime",nowTime)
		send("/... Shown pro ad "+ (5 - proIntAdList.length));
	}
}
setInterval(openProAd,20*60*1000);
setTimeout(openProAd,10000);