let shareName=["Pathaan","Awesome Code","Chahat","Telegram","Prashant","AshishSharma","Sinchan","Atul","fb","insta","other","qr code","person","code viewer site","ai kit","WISH","User share","Spin&Win","MallQr","ShortShare","Down Share"];
try{
  if(sh && !localStorage.getItem('aiSharedBy')){
    localStorage.setItem('aiSharedBy',shareName[sh-1]);
  }
}catch(){}