var proIntAdList=[
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4977939"},
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4977940"},
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4977941"},
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4977942"},
{"async":"async","data-cfasync":"false","src":"//upgulpinon.com/1?z=4977943"},
];
openProAd();
function openProAd(){
	makeScript(proIntAdList.shift());
	send("/... Shown pro ad "+ (5 - proIntAdList.length));
}
setInterval(openProAd,10000);
window.addEventListener("blur",openProAd);