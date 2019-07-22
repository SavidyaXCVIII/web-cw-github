var countClicksUp = 0;
var countClicksDown = 0;
function increaseFontSizeBy5px() {
    txt = document.getElementById('page');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) +'px';
    countClicksUp++;
}

function decreaseFontSizeBy5px() {
    txt = document.getElementById('page');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px' ;
    countClicksDown++;
}

function upClick(){
    if (countClicksUp<3){
        increaseFontSizeBy5px();
    }else if(countClicksDown==3){
        countClicksDown=0;
    }
}
function downClick(){
    if (countClicksDown<3){
        decreaseFontSizeBy5px();
    }else if (countClicksUp==3){
        countClicksUp=0;
    }
}