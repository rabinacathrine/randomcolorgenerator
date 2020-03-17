function genereaterandomcolor(){
   return '#'+Math.floor(Math.random()*16777215).toString(16);
}
function changebackgroundcolor(){
    let colorbg=document.getElementById('color-overlay');
    colorbg.style.backgroundColor=genereaterandomcolor();
}
function changebgtext(){
    let textbg=document.getElementById('text-bg');
    if(textbg.innerHTML=="ON THE FLOOR BABY")
textbg.innerHTML="HIT IT HARD BABY";
else if(textbg.innerHTML=="HIT IT HARD BABY")
textbg.innerHTML="ROCK THE FLOOR";
else if(textbg.innerHTML=="ROCK THE FLOOR")
textbg.innerHTML="ON THE FLOOR BABY";
}

function checkbg(){
    genereaterandomcolor();
    changebackgroundcolor();
    changebgtext();
    
}
setInterval(checkbg,500);
