
var content = document.getElementById("div-content");

var bar = document.getElementById("div-bar");

var barBg = document.getElementById("div-bar-bg");

var contentHeight = content.offsetHeight;
var barBgHeight = barBg.offsetHeight;

var barH = Math.floor(barBgHeight * barBgHeight / contentHeight);

animH(bar, barH);

// barBg.onmouseup=function (ev) {
//     var number = ev.clientY-100-bar.offsetHeight;
//     console.log("number   "+number);
//     animMoveY(bar,number);
//
//     number = Math.floor(number*contentHeight/barBgHeight);
//     console.log("number   "+number);
//
//     animMoveY(content,-number);
// };

bar.onmousedown = function (ev) {
    var startY = ev.clientY;


    document.onmousemove = function (ev1) {


        var offsetTop = bar.offsetTop;
        if ((ev1.clientY - startY)===offsetTop) {
            return;
        }
        window.getSelection? window.getSelection().removeAllRanges():document.selection.empty();

        var number = 0;
        if (ev1.clientY >= startY) {
            number = ev1.clientY - startY;
            console.log("number  " + number);
            bar.style.top = number + "px";
        } else if (ev1.clientY <= startY && offsetTop !== 0) {
            number = 0;
            console.log("number  " + number);
            bar.style.top = number + "px";
        }


        offsetTop = bar.offsetTop;

        if (barH + offsetTop >= barBgHeight) {
            bar.style.top = barBgHeight-barH + "px";
        }

        offsetTop = bar.offsetTop;

        var aa = Math.floor(offsetTop*contentHeight/barBgHeight);

        content.style.top = -aa+"px";
    }
};

document.onmouseup = function () {
    //鼠标抬起的时候,把移动事件干掉
    document.onmousemove = null;
};


function animH(element, target) {
    clearInterval(element.timeId);

    element.timeId = setInterval(function () {
        var current = bar.offsetHeight;

        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style.height = current + "px";

        if (current === target) {
            clearInterval(element.timeId);
        }
    }, 20);
}

function animMoveY(element, target) {
    clearInterval(element.timeId);

    element.timeId = setInterval(function () {
        var current = element.offsetTop;

        var step = (target - current) / 10;

        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        current += step;
        // current = target>0?current:-current;
        console.log("current   " + current);
        element.style.top = current + "px";

        if (current === target) {
            clearInterval(element.timeId);
        }
    }, 20);
}


function animMoveY2(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = bar.offsetTop;

        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        console.log("step " + step);

        current += step;

        element.style.bottom = current + "px";

        if (current === target) {
            clearInterval(element.timeId);
        }
    }, 20);
}

