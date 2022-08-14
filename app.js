console.log("js linked");

const logo = document.getElementById("dev-logo");

function makeAppear() {
    logo.style.visibility = "visible"
}

function makeDisapear() {
    logo.style.visibility = "hidden";
    setTimeout(makeAppear, 1000);
}


setInterval(makeDisapear, 500);


