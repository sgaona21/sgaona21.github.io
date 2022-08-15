console.log("js linked");


// ***BLINKER ANIMATION***
const logo = document.getElementById("blinker");

function makeAppear() {
    logo.style.visibility = "visible"
}

function makeDisapear() {
    logo.style.visibility = "hidden";
}

function makeBoth() {
    setTimeout(makeDisapear, 0);
    setTimeout(makeAppear, 500);
}

setInterval(makeBoth, 1000);

// *****TYPE ANIMATION*****

const characters = document.getElementsByClassName("type-animation");

// function biggerFunction(index, time) {
//     function textsGoGreen(index) { 
//         characters[index].style.color = "green";
//     }
//     function delayedGreen() {
//         textsGoGreen(index);
//     }
//     setTimeout(delayedGreen, time);
// }

// function textAnimation() {
//     time = 1000;
//     for (i = 0; i < characters.length; i++) {
//         time = time+=100;
//         biggerFunction(i, time);
//     }
// }

// textAnimation();

function biggerFunction(index, time) {
    function textsGoGreen(index) { 
        characters[index].style.visibility = "visible";
    }
    function delayedGreen() {
        textsGoGreen(index);
    }
    setTimeout(delayedGreen, time);
}

function textAnimation() {
    time = 1000;
    for (i = 0; i < characters.length; i++) {
        time = time+=100;
        biggerFunction(i, time);
    }
}

textAnimation();



