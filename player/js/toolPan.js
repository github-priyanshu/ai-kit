let htmlx="",toolP=op("#toolL");
for(let val of appTree["Popular"]){
	htmlx+=`
	<div class="apps flex c" title="${val[2]}" onclick="openApp('${val[0]}')">
		<img src="https://ai-tools.netlify.app/img/apps/${val[0]}.png" alt="tool">
		<div class="name">${val[0].replace("_H","-").replace("_"," ")}</div>
	</div>
	`;
}
toolP.innerHTML=htmlx;

function openApp(n){
	location.assign(`https://ai-tools.netlify.app?app=${n}`);
}
function togTool(){
	op("#toolPan").classList.toggle("active");
}