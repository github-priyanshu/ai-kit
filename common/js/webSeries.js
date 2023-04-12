var webseries=
[
/*change the episod number to '01' */
/*[name,bitly img id,totalEpisods,fristEpisodeLink],*/

['Jubilee Season 1','3KsMtgB',4,'__wsdomain/WebSeries/Jubilee.S01/Jubilee.S01.E01.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv','w1t0wll1xnu7,jtli0wwbpqwj,797e8g5z4wbf,bt7acvnb9iyw'],
['Pop Kaun Season 1','3Guu9ma',6,'__wsdomain/WebSeries/Hotstar/Pop.Kaun.S01/Pop.Kaun.S01.E01.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv','5jdpx3l283ke,5dctunarshje,iv1exvdip1qt,x0e2ol46qlis,fs5i7g5mef0c,l8u4q1xigb2s'],
['Shadow And Bone Season 2','3nQNVSi',8,'__wsdomain/WebSeries/NetFlix/Shadow.And.Bone.S02/Shadow.And.Bone.S02.E01.Hindi.English.720p.WEB-DL.ESub-DudeFilms.in.mkv','9bgwwlxscdls,1jqd30unmw8m,a5p3iszyrhwy,7w4za4hk2ruh,rn9zl830tjmu,90seinqyxx2q,00eu8a4em9nz,im6uesvy8ub9'],
['United Kacche Season 1','3KlFfep',8,'__wsdomain/WebSeries/Zee5/United.Kacche.S01/United.Kacche.S01.E01.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv','7d59hf4xvhfz,0k0kbzy6heg5,k0ztyf8rbf86,nin9qqh7j6xx,erhnw9k8q15g,eyhmrgsofmzm,dq79n26c3em7,lj5nzco6icyh'],
['Hunter Season 1','41g9wlO',8,'__wsdomain/WebSeries/Amazon.Prime/Hunter.S01/Hunter.S01.E01.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv','pqogb5fhp1od,fhuzram3jllv,sgwmj8uemilg,2kzn0dldcg4c,swx2zjxz4qfd,0dnbfiwa0cyt,f3qc52qds9sw,t608qt632oka'],
['Rocket Boys Season 2','3ZVuHrW',8,'__wsdomain/WebSeries/Sony.Liv/Rocket.Boys.S02/Rocket.Boys.S02.E01.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv','rgk0huq6pugg,d82epggrvyyh,d5x8i8058zhm,3j28zenbhsh5,pd50ddlq5b2m,jbb7zm3srx7x,hhjtfp7ldb5h,2l3o9l61l8c2'],
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
