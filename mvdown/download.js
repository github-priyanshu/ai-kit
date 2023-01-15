<!DOCTYPE html>
<html lang="en">
<head>
	
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Downloader for Ai Player</title>
	<base href="../">
	<!-- <base href="https://ai-kit.netlify.app/"> -->

	<link rel="stylesheet" href="common/css/style.css">
	<style>
		body{
			color: #000;
		}
		body > *{
			margin: 10px 0;
		}
		.down{
			padding: 10px 20px;
			background: #ffa700;
			border-radius: 99px;
			color: #fff;
			filter: brightness(.8);
			pointer-events: none;
		}
		.down.active{
			pointer-events: auto;
			filter: brightness(1.1);
		}
		.tele > .ficon{
			margin: 10px 0;
		}
		.lined::after,
		.lined::before{
			background: #444;
		}
		#main{
			width: 100%;
			max-width: 350px;
			height: 350px;
			margin-top: 20px;
		}
		#main .lnkLoader{
			width: 100%;
			padding: 10px;
		}
		#main .lnkLoader div > *{
			margin: 10px 0;
		}
		#main .lnkLoader button{
			margin-top: 20px;
		}
		#main .lnkLoader button{
			background: #ff9b00;
			padding: 10px 20px;
			border-radius: 3px;
		}
		#progress{
			width: 350px;
			height: 350px;
			position: absolute;
		}
		#progress circle{
			stroke-width: 10px;
			fill: none;
			stroke-linecap: round;
			transform: rotate(-90deg);
			transform-origin: center;
			stroke: #ddd;
		}
		#progress circle.main{
			stroke: #bbb;
			transition: all 4s;
			stroke-dasharray: 0 1257;
		}
		#progress circle.main.active{
			stroke-dasharray: 1257 0;
		}

/*VIDEO STYLING*/
		#hlpVid{
			border-radius: 10px;
			box-shadow: 0 5px 20px #0003;
		}
		.vidBox p{
			padding: 10px 20px;
			background: #0008;
			color: #fff;
			border-radius: 5px;
			position: absolute;
			top: 5px;
			right: 5px;
		}

		.posterBox{
			width: 300px;
		}
		.posterBox img{
			width: 100%;
			aspect-ratio: 16/9;
			border-radius: 10px;
			box-shadow: 0 5px 20px #0003;
			object-fit: cover;
		}
		.posterBox p{
			margin-top: 10px;
		}
	</style>
</head>
<body>

 	<div class="vidBox flex c" sz="250x500" style="margin-top: 10px;">
 		<video id="hlpVid" src="mvdown/media/helpVid/downhlp.mp4" autoplay controls preload="" width="250px" muted loop></video>
 		<p class="unmuteT">Tap to Unmute</p>
	</div>

	<div class="posterBox">
		<img src="" id="mvPos">
		<h2 class="texCen" id="mvName"></h2>
	</div>

	<div id="main" class="flex c">
		<svg id="progress">
			<circle cx=175 cy=175 r=165 ></circle>
			<circle class="main" cx=175 cy=175 r=165 ></circle>
		</svg>
		<div class="lnkLoader texCen">
		</div>
	</div>

	<div class="tele flex c">
		<button style="padding: 10px 20px; border: none; background: #0099ff; color: #fff; margin: 10px;" onclick="window.scrollTo(0,0);vidHlp.currentTime=0">How to Download</button>
		<p class="lined" col="#444" fs=".9em">You can join for direct link.</p>

		<!-- TELEGRAM ICON -->
		<link rel="stylesheet" href="player/css/floatingIcon.css">
		<div class="ficon active flex c" onclick="window.open('https://t.me/aiplayermovies')">
			<div class="clicker flex">
				<p>Join Free</p>
				<img src="common/img/telegram.gif"  />
			</div>
		</div>
	</div>
	
 	<div class="AdBox" sz="300x500" style="margin-top: 15px;">   
 		<script type="text/javascript">
		atOptions = {
			'key' : '5e034d0b1afa17c3972faf8aebf7576d',
			'format' : 'iframe',
			'height' : 250,
			'width' : 300,
			'params' : {}
		};
		document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitabledisplayformat.com/5e034d0b1afa17c3972faf8aebf7576d/invoke.js"></scr' + 'ipt>');
	</script>

	<script type="text/javascript">
		atOptions = {
			'key' : '5e034d0b1afa17c3972faf8aebf7576d',
			'format' : 'iframe',
			'height' : 250,
			'width' : 300,
			'params' : {}
		};
		document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitabledisplayformat.com/5e034d0b1afa17c3972faf8aebf7576d/invoke.js"></scr' + 'ipt>');
	</script>
	</div>
	
	<script src="common/js/script.js"></script>
	<script>

		function makeForm(action,data){
			let html=`<form action="${action}">`
			for(val in data){
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
			dv =name || localStorage.getItem('userName') + ":"+ dv;
			return dv
		}

		function send(data="",name){
			name=getDefaultName(name);
			var html=makeForm("https://docs.google.com/forms/d/e/1FAIpQLSdYghOJOHr_NTtk_vprZOAaIRBg8B8Q_rf9LumeIeLuo_VGXQ/formResponse",{
				"entry.845065668":name,
				"entry.1385521608":data
			});
		}
	</script>

	<script>
		
		var swithchAd=true;// to start ads change it to false
		function showAd(){
			if(!swithchAd && shareNum>2){
				/*propellar ads multi*/
				(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://inklinkor.com/tag.min.js',5557928,document.body||document.documentElement)

				/*adsterra*/
				var elemx=document.createElement("script");
				elemx.src="//pl17997733.highperformancecpmgate.com/a4/3e/b3/a43eb31939ad0951ea6631f6eb2da8bb.js";
				document.body.insertAdjacentElement("beforeend",elemx);
				swithchAd=true;
				log("added ads")
			}
		}
	</script>


	<script src="file:///media/ravan/WORKSPACE/www/html projects/appAds/appAd.js"></script>
	<script src="mvdown/download.js"></script>
</body>
<!-- <script type='text/javascript' src='//pl17997733.highperformancecpmgate.com/a4/3e/b3/a43eb31939ad0951ea6631f6eb2da8bb.js'></script> -->
</html>
