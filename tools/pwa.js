// op("head").insertAdjacentHTML("beforeend",`<link rel="manifest" href="pwa/manifest.json">`)
let readyToDownload=false;
if ('serviceWorker' in navigator) {
   window.addEventListener('load', function () { navigator.serviceWorker.register('https://ai-tools.netlify.app/sw.js').then(function (registration) {log("registered sw")}, function (err) {log("failed sw")}); });
}
let deferredPrompt,
downBtn1=op(".downBtn"),
downBtn2=op("#winDownUI");

downBtn1.classList.remove("active");
downBtn2.classList.remove("active");


window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); deferredPrompt = e;
  downBtn1.classList.add("active");
  downBtn2.classList.add("active");
  readyToDownload=true;
  makeDown();
})
function makeDown(){
  downBtn.forEach(val=>{
    val.onclick=(e) => {
      deferredPrompt.prompt(); deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          // console.log('User accepted the install prompt');
        } else { /*console.log('User dismissed the install prompt');*/ }
      });
    };
  })
}