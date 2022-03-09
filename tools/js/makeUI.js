var html="",topH="",botH="";

var i=0;
while(toolList[i]){
	topH+=`<div class="appIco" onclick="applyTool(${i})" title="${toolList[i][2]}"><img src="img/icons/${toolList[i++][0]}.png"></div>`

	try{
		botH+=`<div class="appIco" onclick="applyTool(${i})" title="${toolList[i][2]}"><img src="img/icons/${toolList[i++][0]}.png"></div>`
	}catch{}
}

op(".content").innerHTML=`
<div class="ads"></div>
<div class="main flex c">
<div class="uiPan flex c">
<div class="top flex">
${topH}
</div>
<div class="line"></div>
<div class="bot flex">
${botH}
</div>
</div>
<p class="lined" fs="1.1em" col="#555">All AI Tools map</p>
</div>`
resetFormat();