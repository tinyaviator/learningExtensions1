var lifetimesAds = document.getElementById("lifetimeAds");
var switchAdBlockerBtn = document.getElementById("switchAdBlock");

var adBlockerBoolean = true;

var interval = setInterval(() => {lifetimesAds.innerHTML = parseInt(lifetimesAds.innerHTML) + Math.floor(Math.random() * 5)}, 2500);

function switchAdBlocker() {
    if (adBlockerBoolean) {
        switchAdBlockerBtn.innerHTML = "Turn Rose Ad Blocker On";
        clearInterval(interval);
    } else {
        switchAdBlockerBtn.innerHTML = "Turn Rose Ad Blocker Off";
        interval = setInterval(() => {lifetimesAds.innerHTML = parseInt(lifetimesAds.innerHTML) + Math.floor(Math.random() * 5)}, 2500);
    }

    adBlockerBoolean = !adBlockerBoolean;
}

document.getElementById("switchAdBlock").addEventListener("click", () => {switchAdBlocker()});
