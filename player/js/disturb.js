// addScript("js/disturb/notifier.js");


if(checkPro()){
	makeProTheme();
	if(location.hash=="#pro"){
		proAlert();
	}
}else{
	addScript("js/disturb/1hrShare.js");
	if(aiLoadedNum>2){
		//addScript("js/disturb/vignetteAd.js");
		//addScript("js/disturb/proAd.js");
	}
}

function makeProTheme(){
	op("#aiHead").innerHTML+="*";
}


function proAlert(){
	dialog.inside(`<div fs="1.4em" col="#f30">Enjoy Premium:</div>
<ul style="margin-left: 20px;">
	<li>No <b><u>PopUp ads</u></b>.</li>
	<li>No <u><b>sharing</b></u> in movie.</li>
	<li>No auto <u><b>open window</b></u>.</li>
	<li><b><u>No disturbance</u></b> & smooth exp...</li>
</ul>
		`);
	dialog.buttons("Sad","Wow");
	dialog.success=()=>{};
	dialog.show();
}

