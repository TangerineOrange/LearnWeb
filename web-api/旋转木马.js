
var mumaBox = document.getElementById("div-muma-box");

var imgs = mumaBox.getElementsByTagName("img");

var mumaRR = document.getElementById("muma-rr");
var mumaLL = document.getElementById("muma-ll");


mumaLL.onclick = function () {

    for (let i = 0; i < imgs.length - 2; i++) {
        if (i ===4) {
            animAtoB(imgs[0], imgs[i]);
        } else
            animAtoB(imgs[i + 1], imgs[i]);
    }
};


mumaRR.onclick = function () {
    for (let i = 0; i < imgs.length - 2; i++) {
        if (i ===4) {
            animAtoB(imgs[i], imgs[0]);
        } else
            animAtoB(imgs[i], imgs[i+1]);
    }
};


function animAtoB(eA, eB) {

    console.log("eA  " + eA.className + " ---> " + " eB " + eB.className);

    clearInterval(eA.timeId);

    //位置 top left right
    //大小 width height
    //透明度
    var json = {
        "top": eB.offsetTop,
        "left": eB.offsetLeft,
        "right": parseInt(getStyle(eB, "right")),
        "width": eB.offsetWidth,
        "z-index": parseInt(getStyle(eB, "z-index")),
        "opacity": getStyle(eB, "opacity"),
    };

    eA.timeId = setInterval(function () {
        var flag = true;
        for (var attr in json) {

            var current = attr == "opacity"?getStyle(eA, attr):parseInt(getStyle(eA, attr));

            var target = json[attr];

            if (attr == "opacity") {
                console.log("target " + target);
                console.log("current " + current);
            }


            current = current ? current : attr == "opacity" ? 1 : 0;

            target = target ? target : attr == "opacity" ? 1 : 0;


            if (attr == "opacity") {
                current = current * 100;
                target = target * 100;
            }

            var step = (target - current) / 20;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            if (attr == "z-index") {
                eA.style[attr] = target;
            } else if (attr == "opacity") {
                current += step;
                eA.style[attr] = current / 100;
            } else {
                current += step;
                eA.style[attr] = current + "px"
            }

            if (current != target) {
                flag = false;
            }
        }

        if (flag) {
            clearInterval(eA.timeId);
        }

    }, 20);
}

function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr] || 0;
}
