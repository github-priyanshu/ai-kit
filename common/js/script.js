var log=console.log;
function op(elem){return document.querySelector(elem)}
function opp(elem){return document.querySelectorAll(elem)}

if(self!=top){
  top.location=self.location;
}
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
function makeForm(action,data){
  let html=`<form action="${action}">`
  for(let val in data){
    html+=`<input name="${val}" value="${data[val]}">`;
  }
  html+=`<button>Submit</button></form>`

  op("body").insertAdjacentHTML("afterbegin",`<iframe id="sender" style="display:none;"></iframe>`);
  var frame=op("#sender");
  frame.contentWindow.document.querySelector("body").innerHTML=html;
  frame.contentWindow.document.querySelector("button").click();
}

function getDefaultName(name){
  var dv=navigator.appVersion.split(")")[0].replace("5.0 (","").replace("Linux; Android","An.."),
  return dv;
}
