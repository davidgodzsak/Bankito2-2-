/**
 * Bánkitó 2ö2ö
 *
 * Drop some pills and make some sparkles <3 <3 <3
 *
 * @author Dávid Godzsák (insta: @godzsaaa, @made.by.david)
 */

//UTIL
function classNameForEach(className, fn) {
    var items = document.getElementsByClassName(className);

    for (var i = 0; i < items.length; i++) {
        fn(items[i])
    }
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

function turnOnBubbleBath() {
    classNameForEach("bubbles", function (it) {
        var bubble = it.children[0];

        for (var j = 0; j < Math.random() * 20 + 5; j++) {
            setTimeout(function () {
                var newBubble = bubble.cloneNode(true);
                var size = Math.random() * 70 + 10;

                newBubble.style.width = size + "%";
                newBubble.children[0].style.animationDirection = Math.random() > 0.5 ? "alternate" : "alternate-reverse";
                newBubble.style.left = Math.random() * 100 + "px";
                newBubble.style.animationDuration = size * 15 + 1200 + "ms";

                bubble.parentNode.appendChild(newBubble);
            }, Math.random() * 4000)
        }})
}

// MAIN
shuffleDrop();
shuffleWiggle();
turnOnBubbleBath();