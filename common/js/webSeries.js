var webseries=
[
/*change the episod number to '01' */
/*[name,bitly img id,totalEpisods,fristEpisodeLink],*/

['United Kacche Season 1','3GKrntl',8,'__wsdomain/WebSeries/Zee5/United.Kacche.S01/United.Kacche.S01.E01.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv','7d59hf4xvhfz,0k0kbzy6heg5,k0ztyf8rbf86,nin9qqh7j6xx,erhnw9k8q15g,eyhmrgsofmzm,dq79n26c3em7,lj5nzco6icyh'],
['Rocket Boys Season 2','40Ka5EB',8,'__wsdomain/WebSeries/Sony.Liv/Rocket.Boys.S02/Rocket.Boys.S02.E01.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv','rgk0huq6pugg,d82epggrvyyh,d5x8i8058zhm,3j28zenbhsh5,pd50ddlq5b2m,jbb7zm3srx7x,hhjtfp7ldb5h,2l3o9l61l8c2'],
];

var numSeries=webseries.length,
tempSr={},webseriesAry=[];
for(let i=0; i <webseries.length; i++){
	let valx=webseries[i],
	links=[],
	alt=("https://drop.download/"+valx[4]).replaceAll(",",",https://drop.download/").split(',');
	log(alt)
	for(let j=1; j<=valx[2]; j++){
		links.push(valx[3].replace("__wsdomain/",seriesDomain).replace("E01","E"+get2dNum(j)));
	}
	tempSr[i]={
		name: valx[0],
		img: "https://bit.ly/"+valx[1],
		links,
		alt
	};
	log(tempSr);
	webseriesAry.push(tempSr[i]);
}
webseries=tempSr;
function get2dNum(n){
	return n>9?n:"0"+n;
}
