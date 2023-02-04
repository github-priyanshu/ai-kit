document.body.insertAdjacentHTML("afterbegin",`
  <div class="uiPan flex c">
    <div class="banner flex">
      <div class="head">Ai Tools</div>
      <button class="noBtn flex downBtn" ico="download"><span>App</span></button>
    </div>
    <div class="border" w="70"></div>

    <div class="content w100p flex c">
      <link rel="stylesheet" href="tools/css/content.css">
      <div class="head texCen flex c">
        <p>All Useful tools in 1 = AI Tools</p>
        <div class="border" w="0" m="5"></div>
        <p class="lined" fs=".8em">No more external app needed now.</p>
      </div>
      <iframe data-aa='2164055' src='//ad.a-ads.com/2164055?size=320x100' style='width:320px; height:100px; border-radius: 10px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>
      <div class="border" w="70" m="50"></div>

      <div id="pan" class="flex c">

      </div>
    </div>
  </div>`);


makeUI();
function makeUI() {
	var html="";
	for(let val in appTree){
		html+=`
      <div class="appPan flex c">
        <div class="head">${val}</div>
        <div class="apps flex">
          ${getApps(val)}
        </div>
      </div>
      <div class="border" w="50" m="50"></div>
      `;
	}
	op("#pan").innerHTML=html;
	resetLine();
}

function getApps(type){
	var appAryx=appTree[type],
	html="";
	for(let val of appAryx){
		var apnx=val[0].replace("_H"," -> ").replace("_"," ");
		html+= `<div class="app flex c" title="${val[2] || ""}" onclick="openWindow('${val[0]}')">
            <img src="tools/img/apps/${val[0]}.png">
            <div class="name">${apnx}</div>
          </div>`
  }
  return html;
}