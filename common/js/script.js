var log=console.log;
function op(elem){return document.querySelector(elem)}
function opp(elem){return document.querySelectorAll(elem)}

function resetFormat(){
  let keys={
    col: "color",
    fs: "fontSize",
    ff: "fontFamily",
    fw: "fontWeight",
    bg: "background"
  }
  for(let val in keys){
    opp(`*[${val}]`).forEach(elem=>{
      elem.style[keys[val]]=elem.getAttribute(val);
      elem.removeAttribute(val);
    })
  }
  
  opp("*[ico]").forEach(val=>{
    val.insertAdjacentHTML("beforeend",elems[val.getAttribute("ico")]);
    val.removeAttribute("ico");
    val.style.fill=val.getAttribute("fill");
  })
}
resetFormat();
function copyToClipboard(txt){
  let elem=document.createElement("textarea");
  document.body.insertAdjacentElement("beforeend",elem)
  elem.value=txt;
  elem.select();
  elem.setSelectionRange(0, 99999999999999); 
  document.execCommand("copy");
  navigator.clipboard.writeText(elem.value);
  elem.remove();
  return true;
}

/*Blur functions*/
var Blur={
  time:0,countInt:false,blurChecking:false,
  addChecker: ()=>{
    window.addEventListener("blur",Blur.count);
    window.addEventListener("focus",Blur.stopCount);
  },
  count: ()=>{
    if(Blur.blurChecking){
      Blur.time=0;
      Blur.countInt=setInterval(()=>{
        Blur.time++;
      },1000)
    }
  },
  stopCount: ()=>{
    clearInterval(Blur.countInt);
  }
};
Blur.addChecker();

function addStyle(url){
  document.body.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="${url}">`);
}
function addScript(url){
  var elem=document.createElement("script");
  elem.src=url;
  document.body.insertAdjacentElement("beforeend",elem);
}

function stored(varN,type=false){
  var toR=localStorage.getItem(varN) || false;
  if(type){toR=Number(toR)}
  return toR;
}