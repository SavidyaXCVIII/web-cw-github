var divs = ["Menu1", "Menu2", "Menu3", "Menu4", "Menu5","Menu6"];
var visibleDivId = null;
function toggleVisibility(divId) {
    if(visibleDivId === divId) {
        visibleDivId = null;
    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
    var i, divId, div;
    for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}


function bgBlack() {
    document.body.style.backgroundColor = "black";
}

function bgWhite() {
    document.body.style.backgroundColor = "white";
}
function bgLightBlue() {
    document.body.style.backgroundColor = "#23a89b";
}
function bgDarkBlue() {
    document.body.style.backgroundColor = "#22253c";
    document.getElementsByClassName("dropbtn").style.backgroundColor="black";

}
function txtBlack() {
    document.body.style.color = "black";

}
function txtWhite() {
    document.body.style.color = "white";
}
function txtLightBlue() {
    document.body.style.color = "#23a89b";
}

function txtDarkBlue() {
    document.body.style.color = "#22253c";
}

