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
function blink() {
    setInterval(makeBoth, 1000);
}
setTimeout(blink, 1250);





// *****TYPE ANIMATION*****
const title = document.getElementById("title");
const title2String = title.innerHTML;
function makeLetterAppear() {
    title.innerHTML = "";
    let time = 250
    for (i = 0; i < title2String.length; i++) {
        let letter = title2String[i];
        function stringConnect() {
            title.innerHTML = title.innerHTML + letter;
        }
        setTimeout(stringConnect, time);
        time = time += 65;
        console.log(title.innerHTML);
    }  
}
makeLetterAppear();

setInterval(makeLetterAppear, 7500)















