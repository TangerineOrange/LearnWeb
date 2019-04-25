
var divSfq = document.getElementById("div-sfq-out");
var as = divSfq.getElementsByTagName("a");

divSfq.onmouseleave = function () {
    for (let i = 0; i < as.length; i++) {
        animMove(as[i], i * 245);
        // animWidth(as[i],  225);
    }
}


for (let i = 0; i < as.length; i++) {
    as[i].setAttribute("index", i);
    as[i].onmouseenter = function () {
        var index = as[i].getAttribute("index");

        // animWidth(this,838);

        for (let j = 0; j < as.length; j++) {
            // if (j != index) {
            //     animWidth(as[j],72);
            // }

            if (j > index) {
                animMove(as[j], 1226 - (as.length - j) * 82);
            } else if (j <= index) {
                animMove(as[j], j * 82);
            }

        }
    }
}


function animMove(element, target) {
    clearInterval(element.timeId);

    element.timeId = setInterval(function () {

        var offsetLeft = element.offsetLeft;

        var step = (target - offsetLeft) / 10;

        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        element.style.left = step + offsetLeft + "px";

        if (offsetLeft == target) {
            clearInterval(element.timeId);
        }

    }, 20);
}

function animWidth(element, target) {
    clearInterval(element.timeId);

    element.timeId = setInterval(function () {

        var offsetLeft = element.offsetWidth;

        var step = (target - offsetLeft) / 10;

        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        element.style.width = step + offsetLeft + "px";

        if (offsetLeft == target) {
            clearInterval(element.timeId);
        }

    }, 20);
}

