// op("head").insertAdjacentHTML("beforeend",`<link rel="manifest" href="pwa/manifest.json">`)
let readyToDownload=false;
if ('serviceWorker' in navigator) {
   window.addEventListener('load', function () { navigator.serviceWorker.register('https://ai-tools.netlify.app/sw.js').then(function (registration) {log("registered sw")}, function (err) {log("failed sw")}); });
}
let deferredPrompt,
downBtn=opp(".downBtn"),
downBtn1=downBtn[0],
downBtn2=downBtn[1];

downBtn1.classList.remove("active");
downBtn2.classList.remove("active");

log(downBtn1);

window.addEventListener('beforeinstallprompt', (e) => {
  log(e);
  e.preventDefault(); deferredPrompt = e;
  downBtn1.classList.add("active");
  downBtn2.classList.add("active");
  readyToDownload=true;
  makeDown();
})
function makeDown(){
  log("made down btns")
  downBtn.forEach(val=>{
    val.onclick=(e) => {
      log(e);
      deferredPrompt.prompt(); deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          // console.log('User accepted the install prompt');
        } else { /*console.log('User dismissed the install prompt');*/ }
      });
    };
  })
}
