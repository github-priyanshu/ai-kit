var autoPaste=opp(".autoPaste"),
lnkIn=opp(".lnkIn"),
nameIn=opp(".name"),

data={
	movie:"",
	series:"",
};

class ExtraDetail{
	static clearLnk(lnk){
		lnk=lnk.replace('https://','');
		lnk=lnk.replace('0:/','');
		return lnk.split('/');
	}
	static getMvName(lnk){
		var mvType=['BollyWood','South.Movies','HollyWood'];

		lnk=ExtraDetail.clearLnk(lnk);
		op('.workPan[panfor="movie"] input.name').value=ExtraDetail.clearName(lnk[2]);
		op('.workPan[panfor="movie"] #type').value=mvType.indexOf(lnk[1])+1;
	}

	static getSeriesName(lnk){
		lnk=ExtraDetail.clearLnk(lnk);
		op('.workPan[panfor="series"] input.name').value=ExtraDetail.clearName(lnk[3]);
	}

	static clearName(n){
		return n.replace('.2022','').replaceAll(".",' ')
	}

}

function addExtraMv(e){	ExtraDetail.getMvName(e.value);}
function addExtraSr(e){	ExtraDetail.getSeriesName(e.value);}

function copyOpen(el,tocopy){
	copy(tocopy);
	setTimeout(()=>{
		search(el);
	},500)
}

var addedNS=0;
function addSeries(){
	op("#seriesCount").innerHTML=`/...Add Series (${++addedNS})`;
	var str=[];
	str.push("'"+op(".workPan[panFor='series'] .name").value.trim()+"'");
	str.push("'"+op(".workPan[panFor='series'] .imgIn").value.trim().replace("https://bit.ly/","")+"'");
	str.push(op("#enum").value);
	str.push("'"+getShortSeriesLnk(op(".workPan[panFor='series'] .lnkIn").value.trim())+"'");
	str.push("'"+op(".workPan[panFor='series'] .altLnk").value.trim().replace("https://drop.download/","")+"'");

	str=str.join(",");
	data.series+=`\n[${str}],`;
	log(data.series);

	opp(".workPan[panFor='series'] input").forEach(val=>{
		val.value="";
	})
}
function getShortSeriesLnk(fl){
	if(fl.includes("WebSeries")){
		fl=fl.split("/");
		while(fl[0]!="WebSeries"){
			fl.shift();
		}
		return "__wsdomain/"+fl.join("/");
	}
}

var addedN=0;
function addMovies(){
	op("#movieCount").innerHTML=`/...Add Movies (${++addedN})`;
	var str=[];
	str.push("'"+op(".workPan[panFor='movie'] .name").value.trim());
	str.push("'"+op(".workPan[panFor='movie'] .imgIn").value.trim().replace("https://bit.ly/","")+"'");
	str.push("`"+getMovieServerNLink()+"`");
	str.push(op(".workPan[panFor='movie'] select").value);
	str.push("'"+op(".workPan[panFor='movie'] .altLnk").value.trim().replace("https://drop.download/","")+"'");

	str=str.join(",");
	data.movie+=`\n[${str}],`;
	log(data.movie);

	opp(".workPan[panFor='movie'] input").forEach(val=>{
		val.value="";
	})

	function getMovieServerNLink(){
		var link=op(".workPan[panFor='movie'] .lnkIn").value.trim();

		var num=0;
		for(let val of ms){
			if(link.includes(val)){
				link=link.replace(val,num+">");
			}
			num++;
		}
		return link;
	}
}

nameIn.forEach(val=>{
	val.addEventListener("input",()=>{
		var p=val.closest(".workPan"),t=p.getAttribute("panFor");
		var button=op(`.workPan[panFor='${t}'] .imgSrhBtn`);
		button.setAttribute("url",`https://www.google.co.in/search?q=${val.value}&tbm=isch`);
	})
})

lnkIn.forEach(val=>{
	val.addEventListener("input",()=>{
		var p=val.closest(".workPan"),t=p.getAttribute("panFor");
	});
})

autoPaste.forEach(val=>{
	val.addEventListener("focus",()=>{
		if(val.value==""){
			navigator.clipboard.readText().then(ret=>{
				val.value=ret || " ";
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

function search(elem){
	window.open(elem.getAttribute("url"));
}

function copy(txt){
	let elem=document.createElement("textarea");
	document.body.insertAdjacentElement("beforeend",elem)
	elem.value=txt;
	elem.select();
	elem.setSelectionRange(0, 99999999999999); 
	document.execCommand("copy");
	navigator.clipboard.writeText(elem.value);
	elem.remove();
}