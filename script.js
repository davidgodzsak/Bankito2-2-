//UTIL
function runLaterWith(f, i, t) {
    setTimeout(function () {
        f(i)
    }, t);
}

// function

//INITIALIZATION FN
function shuffleWiggle() {
    var items = document.getElementsByClassName("wiggle");

    for (var i = 0; i < items.length; i++) {
        items[i].style.animationDuration = (Math.random() * 2000 + 2000) + "ms";
    }
}

function shuffleDrop() {
    var pills = document.getElementsByClassName("pill");

    for (var i = 0; i < pills.length; i++) {
        runLaterWith(function (a) {
            pills[a].className += " drop"
        }, i, Math.random() * 1400 + 100)
    }
}

function turnOnBubbleBath() {
    var bubbleContainers = document.getElementsByClassName("bubbles");

    for (var i = 0; i < bubbleContainers.length; i++) {
        var bubbles = bubbleContainers[i].children;
        for (var j = 0; j < Math.random() * 20 + 5; j++) {
            runLaterWith(function (bubb) {
                var newBubble = bubb.cloneNode(true);

                var size = Math.random() * 70 + 10;

                newBubble.style.width = size + "%";
                newBubble.children[0].style.animationDirection = Math.random() > 0.5 ? "alternate" : "alternate-reverse";
                newBubble.style.left = Math.random() * 100 + "px";
                newBubble.style.animationDuration = size * 15 + 1200 + "ms";

                bubb.parentNode.appendChild(newBubble);
            }, bubbles[0], Math.random() * 4000)
        }
    }
}

// MAIN
shuffleDrop();
shuffleWiggle();
turnOnBubbleBath();
