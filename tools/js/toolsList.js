var tools={
Bg_Remover:["https://removal.ai/upload/","Remove background in 1s",true],
Vidmate:["https://yt1s.com/en196","Youtube video downloader",true],
Hot_Songs:["https://www.saregama.com/bollywood","New Songs Download",true],
Beautiful_QR:["https://www.qrcode-monkey.com/","QR Code generater",true],
High_Img:["https://bigjpg.com/","Turn low to high pixel image",true],
Wallpaper:["https://unsplash.com/","High Quality images"],
Youtube:["https://youtube.com"],
Facebook:["https://m.facebook.com/"],
Instagram:["https://www.instagram.com/"],
Twitter:["https://twitter.com/"],
Quora:["https://www.quora.com/"],
Share_Chat:["https://sharechat.com/"],
Date_Calculator:["https://xncz6jvtel8xrnny9ta6nw.on.drv.tw/www.calculate/","All in one calculator",true],
Anything_HPDF:["https://topdf.com/","Conver all kind of file in all types",true],
Unlock_PDF:["https://unlockpdf.com/","Break the password",true],
Crop_PDF:["https://croppdf.com/","Crop a PDF file",true],
Rotate_PDF:["https://rotatepdf.com/","Rotate a PDF file",true],
Amazon:["https://amazon.com/"],
Flipkart:["https://flipkart.com/"],
Myntra:["https://www.myntra.com/"],
Meesho:["https://meesho.com/"],
Shopsy:["https://www.shopsy.in/"],
Snapdeal:["https://www.snapdeal.com/"],
Movies:["https://ai-player.netlify.app/"],
}
var appTree={
	Popular:["Vidmate","Bg_Remover","Anything_HPDF","Beautiful_QR","Hot_Songs"],
	Media:["Movies","Hot_Songs","High_Img","Wallpaper","Vidmate"],
	Files:["Anything_HPDF","Unlock_PDF","Crop_PDF","Rotate_PDF"],
	Shoping:["Meesho","Shopsy","Flipkart","Amazon","Snapdeal"],
	Social_Link:["Youtube","Facebook","Instagram","Twitter","Quora","Share_Chat"],
}

var tempx={};
for(let val in appTree){
	tempx[val]=appTree[val].map(i=>{
		return [i,...tools[i]];
	})
}
appTree=tempx;