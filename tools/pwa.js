// op("head").insertAdjacentHTML("beforeend",`<link rel="manifest" href="pwa/manifest.json">`)
let readyToDownload=false;
if ('serviceWorker' in navigator) {
   window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').then(function (registration) {}, function (err) {}); });
}
let deferredPrompt,
downBtn=opp(".downBtn"),
downBtn1=downBtn[0],
downBtn2=downBtn[1];

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
  val.onclick=(e) => {
    deferredPrompt.prompt(); deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        // console.log('User accepted the install prompt');
      } else { /*console.log('User dismissed the install prompt');*/ }
    });
  };
}
