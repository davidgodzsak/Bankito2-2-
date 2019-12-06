/**
 * Bánkitó 2ö2ö
 *
 * Drop some pills and make some sparkles <3 <3 <3
 *
 * @author Dávid Godzsák (insta: @godzsaaa, @made.by.david)
 */
//CONST
var MIN_BUBBLE_AMOUNT = 5;
var EXTRA_BUBBLES = 30;

//GLOBAL VARS
var isScrolling = false;
var scrollBackCallBack = null;
var initialScrollEvent = true;

//UTIL
function classNameForEach(className, fn) {
    var items = document.getElementsByClassName(className);

    for (var i = 0; i < items.length; i++) {
        fn(items[i])
    }
}

function runLaterWith(f, i, t) {
    setTimeout(function () {
        f(i)
    }, t);
}

//INITIALIZATION FN
function shuffleWiggle() {
    classNameForEach("wiggle", function (it) {
        it.style.animationDuration = (Math.random() * 2000 + 2000) + "ms";
    });
}

function shuffleDrop() {
    classNameForEach("pill", function (it) {
        setTimeout(function () {
            it.className += " drop"
        }, Math.random() * 1400 + 100)
    });
}

function makeBubble(bubble, now) {
    var newBubble = bubble.cloneNode(true);
    var size = Math.random() * 70 + 10;

    newBubble.style.width = size + "%";
    newBubble.children[0].style.animationDirection = Math.random() > 0.5 ? "alternate" : "alternate-reverse";
    newBubble.style.left = Math.random() * 100 + "px";
    newBubble.style.animationDuration = size * 15 + 1200 + "ms";
    if (now) {
        newBubble.style.animationDelay = 0 + "ms";
    }

    bubble.parentNode.appendChild(newBubble);
}

function turnOnBubbleBath() {
    classNameForEach("bubbles", function (it) {
        var bubble = it.children[0];

        for (var j = 0; j < Math.random() * 20 + MIN_BUBBLE_AMOUNT; j++) {
            runLaterWith(makeBubble, bubble, Math.random() * 4000)
        }
    })
}

function addBubbles(bubble, amount) {
    for (var i = 0; i < amount; i++) {
        runLaterWith(function () {
            makeBubble(bubble, true);
        }, null, Math.random() * 400);
    }
}

function removeBubbles(bubble, amount) {
    var children = bubble.parentNode.children;
    var realAmount = amount > MIN_BUBBLE_AMOUNT ? amount : 0;

    for (var i = 1; i < realAmount; i++) {
        runLaterWith(function (a) {
            a.remove()
        }, children[i], Math.random() * 800);
    }
}

function updateBubbleBath() {
    classNameForEach("bubbles", function (it) {
        var bubble = it.children[0];
        var existingBubbles = it.children.length;
        var numberOfBubbles = Math.round(Math.random() * 20 + MIN_BUBBLE_AMOUNT + (isScrolling ? EXTRA_BUBBLES : 0));

        let bubbleDelta = existingBubbles - numberOfBubbles;
        if (bubbleDelta > 0) {
            removeBubbles(bubble, bubbleDelta);
        } else {
            addBubbles(bubble, -bubbleDelta);
        }
    })
}

//LISTENERS
window.addEventListener('scroll', function (e) {
    if (initialScrollEvent) {
        initialScrollEvent = false;
        return;
    }
    if (!isScrolling) {
        isScrolling = true;
        updateBubbleBath();
    }

    clearTimeout(scrollBackCallBack);
    scrollBackCallBack = setTimeout(function () {
        isScrolling = false;
        updateBubbleBath();
    }, 600);
});

// MAIN
shuffleDrop();
shuffleWiggle();
turnOnBubbleBath();
