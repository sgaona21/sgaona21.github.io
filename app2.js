console.log("js linked");



// *****BLINKER ANIMATION*****
const blinker = document.getElementById("blinker");

function makeAppear() {
    blinker.style.visibility = "visible"
}

function makeDisappear() {
    blinker.style.visibility = "hidden";
}

function makeBoth() {
    setTimeout(makeDisappear, 0);
    setTimeout(makeAppear, 500);
}

setInterval(makeBoth, 1000);




// *****TYPE ANIMATION*****

const characters = document.getElementsByClassName("type-animation");

function textVisibility(index, time) {
    function letterAppear(index) { 
        characters[index].style.display = "inline";
    }
    function delayedAppearance() {
        letterAppear(index);
    }
    setTimeout(delayedAppearance, time);
}

function typeAnimation() {
    time = 1000;
    for (i = 0; i < characters.length; i++) {
        time = time+=100;
        textVisibility(i, time);
    }
}

typeAnimation();

console.log(characters);








