
var hd = my$("hd");
var offsetTop = hd.offsetTop;

//div的滚动事件
my$("bd").onscroll = function () {
    if (window.pageYOffset >= offsetTop) {

        if (hd.className !== "fixed")
            hd.className = "fixed";
        console.log("???");

    } else {
        if (hd.className !== "head")
            hd.className = "head";
        console.log("!!!");
    }
};


animMove(my$("bg"), 105);


function animMove(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {

        var offsetLeft = element.offsetLeft;

        var step = (target - offsetLeft) / 10;

        // console.log("step "+step);

        // step = Math.ceil(step);

        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        element.style.left = step + offsetLeft + "px";

        if ((step + offsetLeft) == target) {
            clearInterval(element.timeId);
        }

    }, 20);
}

function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr] || 0;
}

function animZH(element, json) {
    clearInterval(element.timeId);

    element.timeId = setInterval(function () {
        var flag =true;
        for (var attr in json) {
            var current = parseInt(getStyle(element, attr));

            //当前的属性对应的目标值
            var target = json[attr];

            var step = (target - current) / 10;

            //大于0 ，向上取整。 小于0，向下取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            console.log("step " + step);

            element.style[attr] = step + current + "px";

            if (current != target) {
                flag=false;
            }
        }

        if (flag) {
            clearInterval(element.timeId);
        }

    }, 20);
}


var spans = document.getElementsByClassName("op")[0].getElementsByTagName("span");


for (let i = 0; i < spans.length; i++) {
    spans[i].onmouseover = function () {

        var bgE = my$("bg");
        if (this.offsetWidth+10 != bgE.offsetWidth) {

            console.log("animZH " );

            animZH(bgE, {"width": this.offsetWidth+10, "left": (95 + this.offsetLeft)});
        }else{
            animMove(bgE, 95 + this.offsetLeft);
            console.log("animMove " );

        }

        console.log("this.width   : " + this.offsetWidth);
        console.log("bgE.offsetWidth   " + bgE.offsetWidth);
        console.log("this.offsetLeft   : " + this.offsetLeft);
    }

}
