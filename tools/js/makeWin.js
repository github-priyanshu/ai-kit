document.body.insertAdjacentHTML("beforeend",`
  <div class="win">
    <link rel="stylesheet" href="tools/css/win.css">
    <div class="banner b2 flex c" id="winDownUI">
      <div class="head flex">
        <img src="tools/img/toolDesc.png" alt="">
      </div>
      <button class="noBtn flex downBtn" ico="download"><span>Download All In 1 App <b>1MB</b></span></button>
    </div>

    <div class="iframe">
      <iframe id="iframe"></iframe>
    </div>
    <div id="loader" onloadstart='loadedWin(this);'></div>
  </div>
	`);

var loader={
  el:op("#loader"),
  show:(txt="Loading...")=>{
    loader.el.innerHTML=txt;
    loader.el.classList.add('active');
    setTimeout(loader.hide,3000);
  },
  hide: ()=>{loader.el.classList.remove("active")}
}