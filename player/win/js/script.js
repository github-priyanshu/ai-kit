resetFormat();
var winNum=op("#winnerNum"),stime=1645802318956,
numWinned=Math.floor((new Date().getTime()-stime)/(30*1000));

winNum.innerHTML=numWinned;