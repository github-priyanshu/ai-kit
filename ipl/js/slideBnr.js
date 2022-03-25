var m=[
{name:"Name",img:"",time:"Wed Mar 25 2022 20:59:32 GMT+0530 (India Standard Time)"},
{name:"Name",img:"",time:"Wed Mar 26 2022 20:59:32 GMT+0530 (India Standard Time)"},
{name:"Name",img:"",time:"Wed Mar 27 2022 20:59:32 GMT+0530 (India Standard Time)"},

];

var slideBnr=op("#slideBnr"),
plBnr=op("#plBnr");

makeSlBnr();
plBnr.innerHTML=`<div class="img">${getImg(0)}</div>`;


function makeSlBnr(){
	var html="<div class='slider flex'>",
	dotHtml="<div class='dots flex'>",
	n=0;

	while(n<m.length){
		html+=`<div class='img' num="${n}">
			${getImg(n)}
		</div>`;
		dotHtml+=`<div class='brnDot' onclick="autoScroll(${n})"></div>`;
		n++;
	}
	dotHtml+="</div>";
	slideBnr.innerHTML=html;
	slideBnr.insertAdjacentHTML("afterend",dotHtml);
}

function getImg(n){
	var val=m[n],
	mTime=new Date(val.time);
	var html=`<img src="${val.img}" alt="${val.name}">`;

	var diff=(new Date(val.time).getTime() - new Date().getTime())/1000/60/60;
	log(diff);
	
	if(diff<0){
		html+=`<div class="live flex">LIVE <span style="--s: 4px"></span></div>`
	}else	if(diff<24){
		html+=`<div class="start">Starting At: ${mTime.getHours()} : ${mTime.getMinutes()}</div>`;
	}else{
		html+=`<div class="start"> ${mTime.getDate()}/${mTime.getMonth()+1}/${mTime.getFullYear()}</div>`;
	}

	return html;
}

var tm=false;
var asNum=0;
function autoScroll(num){
	num=num%3;
	var x=op(`.slider .img[num='${num}']`);
	x=x.offsetLeft;
	slideBnr.scrollTo(x-10,0);

	clearTimeout(tm);
	tm=setTimeout(()=>{
		asNum=num;
		autoScroll(++asNum);
		log("cam");
	},3000);
}
autoScroll(0)
