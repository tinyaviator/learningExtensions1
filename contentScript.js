document.body.innerHTML += "<img src='https://as2.ftcdn.net/jpg/05/99/75/93/1000_F_599759313_Xau3afdZjDExY0qpRWAap4QyGklGKw5D.jpg' id='theGoat'>"

document.getElementById("theGoat").style.zIndex = "999999999";
document.getElementById("theGoat").style.width = window.innerWidth * 0.25;
document.getElementById("theGoat").style.position = "absolute";
document.getElementById("theGoat").style.top = "0px";
document.getElementById("theGoat").style.left = ((window.innerWidth / 2) - window.innerWidth * 0.25) + "px";

const audio = new Audio('goats.mp3');
audio.play();

var moveSpeed = Math.floor(Math.random() * 100) + 1;

document.querySelectorAll("img").forEach((element) => {
    element.src = "https://as2.ftcdn.net/jpg/05/99/75/93/1000_F_599759313_Xau3afdZjDExY0qpRWAap4QyGklGKw5D.jpg"
})

setInterval(() => {document.getElementById("theGoat").style.top = (parseInt(document.getElementById("theGoat").style.top) + moveSpeed) + "px"}, 1000)
