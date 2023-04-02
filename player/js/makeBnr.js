var mvtoshow=5,posPan=op(".posPan");

var html="";
for(let i=0; i<mvtoshow; i++){
	let mid=lastMid-i,valx=movies[mid];
	html+=`<div class="pos" mid="${mid}" onclick="location.assign('movie?mid=${val.mid}&m=${val.name}')">
		  		<img src="${valx.img}" alt="${valx.name}">
		  	 </div>`;
}
posPan.innerHTML=html;
var fistImgxx=op(".posPan img");
var tosub=(posPan.offsetWidth%fistImgxx.offsetWidth)/2-8;

var psLeft=[];
opp(".posPan .pos").forEach(val=>{
	psLeft.push(val.offsetLeft);
})

var scrNum=0;
posPan.addEventListener('scroll',userScroll);
autoscroll();
var scrInt=setInterval(autoscroll,2000);
function autoscroll(){
	posPan.removeEventListener('scroll',userScroll);
	posPan.scrollTo(psLeft[scrNum] - tosub,0);
	scrNum++;
	if(scrNum==mvtoshow){scrNum=0}
	setTimeout(()=>{
		posPan.addEventListener('scroll',userScroll);
	},1000)
}

function userScroll(){
	clearInterval(scrInt);
}