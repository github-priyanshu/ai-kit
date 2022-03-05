var loadShowAd=op(".loadShowAd"),
loadShowCont=op(".loadShowAd .cont"),
html=`<div class="fr c flex">
			<p class="offerTxt" col="#ff0055">Offer in <b>V Mart</b> <u>Redma, Daltonganj</u>.</p>
			<a href="https://www.google.com/maps/dir//V-Mart,+Plot+no.+2616+Near+ICICI+Bank,+Redma+Chowk+Daltonganj,+Daltonganj,+Jharkhand+822101/@24.037858,84.0735047,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x398c77e8d2e2c57f:0x393fe1fe8b8bd31!2m2!1d84.075692!2d24.0378491" target="__blank" col="#fff"><button class="noBtn" col="#fff">Google Map</button></a>
		</div>
		<div class="fr c flex">
			<img src="img/tieUps/vm1.png">
	</div>`;

function showLoad(){
	if(aiLoadedNum>2){
		loadShowCont.innerHTML=html;
		loadShowAd.classList.add('active');
		resetFormat();
	}
}
function skipLoad(){
	log("came")
	loadShowAd.classList.remove("active");
}
video.onplay=skipLoad;