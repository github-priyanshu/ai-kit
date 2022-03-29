var m=[
{name: "SRH vs RAJ",img: "https://bit.ly/3NrTTkV",time: "Tue Mar 29 2022 19:30:00 GMT+0530 (India Standard Time)",},

];

var slideBnr=op("#slideBnr");

makeSlBnr();

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
	},3000);
}
autoScroll(0)
