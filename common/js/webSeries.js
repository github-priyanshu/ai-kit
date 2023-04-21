var webseries=
[
/*change the episod number to '01' */
/*[name,bitly img id,totalEpisods,fristEpisodeLink],*/

['Garmi Season 1','41oxLhW',9,'__wsdomain/WebSeries/Garmi.S01/Garmi.S01.E01.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv','o0o4mhdo9rh0,s8h89no76ner,6hb85swu7vhc,5v7ohnuyfksw,rn0xqxeipds7,bya4f4f3h95p,bxq75gn4o5ks,qhf6vzwe1gfb,02dotv32lzxx'],
['Obsession Season 1','40aXYPF',4,'__wsdomain/WebSeries/NetFlix/Obsession.S01/Obsession.S01.E01.Hindi.English.720p.(10bit).WEB-DL.ESub-DudeFilms.in.mkv','un0uoo5hdh0j,a0divmi49ch6,be9j9gpfh832'],
['Florida Man Season 1','3myEUxd',7,'__wsdomain/WebSeries/NetFlix/Florida.Man.S01/Florida.Man.S01.E01.Hindi.English.720p.(10bit).WEB-DL.ESub-DudeFilms.in.mkv','oqrjyo62oyv5,tzinubvv3amq,49e3fnlmj7we,m9ap30btqzmb,gsct0ax5pst0,f0y2z56cfj71,bh1nm8qr0t1i'],
['Farzi Season 1','43BjYX4',8,'__wsdomain/WebSeries/Amazon.Prime/Farzi.S01/Farzi.S01.E01.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv','3f5l3jvh0ivx,bdevz59ataby,f11n89h2yhfu,p89ogvv5lh9e,5ska6sy8plkg,oewqe8a7q0w8,fghyn11yz9jt,0lrui2nx0ahc'],
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
