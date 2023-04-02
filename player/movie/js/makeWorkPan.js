var mid=moviesAry.length-1;
getVariableFromQuery();

var curMvDetail=movies[mid],mainLnk=curMvDetail.src,downExp=Number(localStorage.getItem('downExp') || 0);

document.title=document.title.replace("movie",curMvDetail.name+' Movie');

function getLink(){
	var value=op('#link').value;
	if(value==0){
		alert("Choose the link to download...")
		return false;
	}else if(value.includes("download")){
		value=value.replace('download','');
		window.open('https://ai-movie-download.netlify.app?lnk='+JSON.stringify(getAltLnk(curMvDetail)));
	}else if(value.includes("watch")){
		value=value.replace('watch','');
		window.open('https://ai-player.netlify.app?mlnk="'+mainLnk.replaceAll('480',value)+'"');
	}
	localStorage.setItem('downExp',++downExp);
}

op('.workPan').insertAdjacentHTML("afterbegin",`
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
  <div class="chooseLink flex">
    <select id="link">
      <option value="0">Choose Link 👈</option>

      <optgroup label="Pakka Downlaod">
	      <option value="${curMvDetail.altLnk}">Download [480px]</option>
      </optgroup>

      <optgroup label="Fast (Not Pakka)">
	      <option value="download480">Download [480px]</option>
	      <option value="download720">Download [720px]</option>
	      <option value="download1080">Download [1080px]</option>
      </optgroup>

      <optgroup label="Watch Online">
	      <option value="watch480">480px</option>
	      <option value="watch720">720px</option>
	      <option value="watch1080">1080px</option>
			</optgroup>

    </select>
    <button class="noBtn" onclick="getLink();">Get Link</button>
	  <div class="redirector active" onclick="popunderAd()"></div>
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
	}
}
function getAltLnk(movieObj) {
	return {
		mid: mid,
		name: movieObj.name,
		img: movieObj.img,
		src: movieObj.altLnk,
	}
}
