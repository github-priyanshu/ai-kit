/*PROPELLAR ADS FUNCITONS*/

var proIntAdList=[
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4952593"},
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4954236"},
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4954239"},
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4954240"},
]

var lastIntAdTime=localStorage.getItem("lastIntAdTime") || 0;
lastIntAdTime=Number(lastIntAdTime);

function openProAd(toOpen=false){
	var nowTime=new Date().getTime()/1000;
	log(nowTime)

	if((aiLoadedNum>1 && lastIntAdTime+300 < nowTime && proIntAdList.length) || toOpen){
		lastIntAdTime=nowTime;
		makeScript(proIntAdList.shift());

		try{disableProInt(toOpen)}catch{}

		localStorage.setItem("lastIntAdTime",nowTime);
		send("/... Shown pro ad "+ (4 - proIntAdList.length)+toOpen);

		setTimeout(()=>{
			openProAd();
		},20*1000)
	}
}

