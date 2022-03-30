let readyToDownload=false;
if ('serviceWorker' in navigator) {
   window.addEventListener('load', function () { navigator.serviceWorker.register('https://ai-ipl.netlify.app/sw.js').then(function (registration) {log("registered sw")}, function (err) {log("failed sw")}); });
}
let deferredPrompt,
downBtn1=op(".downBtn"),

downBtn1.classList.remove("active");


window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); deferredPrompt = e;
  downBtn1.classList.add("active");
  readyToDownload=true;
  makeDown();
})
function makeDown(){
  downBtn1.onclick=(e) => {
    deferredPrompt.prompt(); deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        // console.log('User accepted the install prompt');
      } else { /*console.log('User dismissed the install prompt');*/ }
    });
  };
}