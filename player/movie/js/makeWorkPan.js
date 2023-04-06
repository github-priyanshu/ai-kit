var mid=moviesAry.length-1;
getVariableFromQuery();

var curMvDetail=movies[mid],mainLnk=curMvDetail.src,downExp=Number(localStorage.getItem('downExp') || 0);

document.title=document.title.replace("movie",curMvDetail.name+' Movie');

var exInc=false;
function getLink(elem,value){
	if(!isDownLoaded() && downExp>1){
		alert("You need to open 'Ai Player' app to watch movies");
		op(".downBtn").click();
	}else{
		if(value=="alt"){
			window.open('https://ai-movie-download.netlify.app?lnk='+JSON.stringify(getAltLnk(curMvDetail)));
		}else if(value.includes("download")){
			window.open('https://ai-movie-download.netlify.app?lnk='+JSON.stringify(getPxLnk(curMvDetail,elem.innerText.replace('px',''))));
		}else if(value.includes("watch")){
			window.open('https://ai-player.netlify.app?mlnk="'+mainLnk.replaceAll('480',elem.innerText.replace('px',''))+'"');
		}

		if(!exInc){
			localStorage.setItem('downExp',++downExp);
			exInc=true;
		}
		location.assign("//ookroush.com/4/4937751");
	}
}

op('.workPan').insertAdjacentHTML("afterbegin",`
<div class="downBtn active flex c">
	<button class="noBtn" style="padding: 40px 20px;background: linear-gradient(90deg, #ff0077 50%, #00c8ff 50%);clip-path: polygon(50% 25%, 5% 0%, 0% 70%, 50% 100%, 100% 70%, 95% 0%);color: #fff;font-size: 1em;text-shadow: 0 2px 10px #000;font-weight: bold;">Install App</button>
	<p>0.8 MB App</p>
</div>

<div class="lineMargin" m="10px"></div>

<div class="posterPan flex">
  <div class="poster">
    <img src="${curMvDetail.img}" alt="">
    <div class="lineMargin" m="10px"></div>
    <h2 class="name">${curMvDetail.name}</h2>
    <div class="lineMargin" m="10px"></div>
  </div>
</div>

<div class="lineMargin" m="10px"></div>

<div class="movieImgBtn flex">
  <button class="flex c noBtn" onclick="window.open('https://www.google.com/search?q=${curMvDetail.name}+movie+scene&tbm=isch')"><img src="img/scene.svg" alt=""><p>Scene</p></button>
  <button class="flex c noBtn" onclick="window.open('https://www.google.com/search?q=cast of ${curMvDetail.name}+movie')"><img src="img/actors.svg" alt=""><p>Actors</p></button>
</div>

<div class="lineMargin" m="50px" w='50%' h='1px' bg="#666"></div>


<div class="linkPan flex c">
	<p class='texCen'>👇👇 Choose the link to download</p>
	<div class="lineMargin" m="5px"></div>
  <div class="chooseLink flex c texCen" col="#fff">

  	<div class="sureDownload">
  		<button class="noBtn" onclick='getLink(this,"alt");'>Download 480px</button>
  		
  	</div>

  	<div class="lineMargin" m="20px" w="100%" h="1px" bg="#fff"></div>

  	<div class="fast">
  		<p>It may not work sometimes</p>
  		<button class="noBtn" onclick="this.nextElementSibling.style.display='block'">Fast Download</button>
  		<div class='subBtn'>
  			<button class="noBtn" onclick='getLink(this,"download");'>480px</button>
  			<button class="noBtn" onclick='getLink(this,"download");'>720px</button>
  			<button class="noBtn" onclick='getLink(this,"download");'>1080px</button>
  		</div>
  	</div>
  	<div class="lineMargin" m="20px" w="100%" h="1px" bg="#fff"></div>


  	<div class="Watch Online">
  		<p>It may not work sometimes</p>
  		<button class="noBtn" onclick="this.nextElementSibling.style.display='block'">Watch Online</button>

  		<div class='subBtn'>
  			<button class="noBtn" onclick='getLink(this,"watch");'>480px</button>
  			<button class="noBtn" onclick='getLink(this,"watch");'>720px</button>
  			<button class="noBtn" onclick='getLink(this,"watch");'>1080px</button>
  		</div>

  	</div>

	  <div class="redirector" onclick="popunderAd()"></div>
  </div>
</div>
`)

function getVariableFromQuery(){
	var query=location.search.replace("?","");

	query=query.split("&");
	for(let val of query){
		val=decodeURI(val).split("=");
		window[val[0]]=val[1];
	}
}

function getPxLnk(movieObj,px) {
	return {
		mid: mid,
		name: movieObj.name,
		img: movieObj.img,
		src: mainLnk.replaceAll('480',px),
		altLnk: movieObj.altLnk
	}
}
function getAltLnk(movieObj) {
	return {
		mid: mid,
		name: movieObj.name,
		img: movieObj.img,
		src: movieObj.src,
		altLnk: movieObj.altLnk
	}
}