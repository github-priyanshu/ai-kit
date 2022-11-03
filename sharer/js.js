var autoPaste=opp(".autoPaste");

autoPaste.forEach(val=>{
	val.addEventListener("focus",()=>{
		if(val.value==""){
			navigator.clipboard.readText().then(ret=>{
				val.value=ret || " ";
				val.blur();
			});
		}
	});

	val.addEventListener("focus",()=>{
		if(val.value.startsWith("http") && !val.getAttribute("tried")){
			val.setAttribute("tried",1);
			document.body.click();
		}
	})
})

function copy(txt){
	if(txt.startsWith('http')){txt=encodeURI(txt)}
	let elem=document.createElement("textarea");
	document.body.insertAdjacentElement("beforeend",elem)
	elem.value=txt;
	elem.select();
	elem.setSelectionRange(0, 99999999999999); 
	document.execCommand("copy");
	navigator.clipboard.writeText(elem.value);
	elem.remove();
}


/*sTART GENERAL*/
var obj={
	sharedBy:'',
	movie:'',
	link: 'https://ai-player.netlify.app'
},
shareNameBx=op(".shareName"),
mvNameBx=op(".mvName"),
msgTxt=op("textarea.txt");

function getFullUrl(){
	var shtxt=""
	if(obj.sharedBy!=''){
		shtxt="?sh="+obj.sharedBy;
	}
	if(obj.movie!=''){
		shtxt="?mid="+obj.movie;
	}
	if(obj.sharedBy!='' && obj.movie!=''){
		shtxt="?sh="+obj.sharedBy+"&mid="+obj.movie;
	}
	return obj.link+shtxt;
}

/*MAKING SHAREING SETTINGS*/
var html=`<button class="name" onclick="setShare('')">None</button>`;
shareName.map((val,i)=>{
	html+=`<button class="name" onclick="setShare('${i+1}')">${val}</button>`;
})
shareNameBx.innerHTML=html;

function setShare(i){
	obj.sharedBy=i;
	changeTxtMsg();
}


/*COPY TXT MSG*/
changeTxtMsg();
function changeTxtMsg(){
	var uri=getFullUrl();

	var txt=`All new MOVIES & WebSeries
Download & Watch Free

${uri}

Some Populars:

Har Har Mahadev
Ram Setu
Hindutva

${uri}`;
	msgTxt.value=txt;
}

/*MOVIE CHOOSER*/
html=`<button class="name" onclick="setMovie('')">None</button>`;

for(let i=0; i<10; i++){
	var val=moviesAry[i];
	html+=`<button class="name" onclick="setMovie('${val.mid}')">${val.name}</button>`;
}
var htmlx="<option value=''>See More</option>";
moviesAry.map(val=>{
	htmlx+=`<option value="${val.mid}">${val.name}</option>`;
})
html+=`<select id="movieMid" onchange="setMovie(this.value)">${htmlx}</select>`

mvNameBx.innerHTML=html;

function setMovie(i){
	obj.movie=i;
	changeTxtMsg();
}


/*CHOOSE TO COPY SECTIONS*/
function sms(){
	var txt=`Watxh & Downloxd Now..!!
*"${movies[obj.movie].name}"*
👇👇👇
${getFullUrl()}
`
copy(txt);
}


/*DOWNLOAD LINK*/
function downloadLink(){
	var val=movies[obj.movie];
	copy(`https://ai-movie-download.netlify.app?lnk=${JSON.stringify({name:val.name,src:val.src,altLnk:val.altLnk})}`);
}

/*REDIRECT ARTICLE LINK*/
function redirectArticleLink() {
	var objx={mid:obj.movie};
	copy(`https://ai-article.netlify.app/page/bhool bhulaiyaa 2.html?redirect=`+btoa(JSON.stringify(objx)));
}

function makeRedirectLnk(el){
	copy(`https://ai-article.netlify.app/page/bhool bhulaiyaa 2.html?redirect=`+btoa(JSON.stringify({lnk:el.previousElementSibling.value})));
}

function aiDownloadPage(el){
	copy(`https://ai-movie-download.netlify.app/?lnk=`+JSON.stringify({name:"From ai share",src:el.previousElementSibling.value}));
}
