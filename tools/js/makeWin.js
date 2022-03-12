document.body.insertAdjacentHTML("beforeend",`
  <div class="win">
    <link rel="stylesheet" href="tools/css/win.css">
    <div class="banner b2 flex">
      <div class="head">Ai Tools</div>
      <button class="noBtn flex downBtn" ico="download"><span>App</span></button>
      <div class="handle flex" ico="down" onclick="this.parentElement.classList.toggle('active')"></div>
    </div>

    <div class="iframe">
      <iframe src="" id="iframe"></iframe>
    </div>
  </div>
	`);