
var rbMenu = document.getElementById("div-rb-menu");

var lis = rbMenu.getElementsByTagName("li");

for (let i = 0; i < lis.length; i++) {

    lis[i].onclick = function () {

        for (let j = 0; j < lis.length - 1; j++) {

            var json1 = {"top": -62};

            animDown(lis[j],json1, 15, j,function (){

                var json2 = {"left": (rbMenu.offsetLeft+lis[j].offsetWidth ) };

                animDown(rbMenu, json2, 10, 11);
            });
        }
    }
}

var count = 0;

function animDown(element, json, speed, index,fn) {
    clearInterval(element.timeId);

    element.timeId = setInterval(function () {
        var flag = true;

        for (var attr in json) {
            var current = parseInt(getStyle(element, attr));

            //当前的属性对应的目标值
            var target = json[attr];

            //将 0 、1、2、3、4转化为1、2、3、4、5
            index++;

            if (count == 4)
                console.log(" index  " + index);

            // var offsetTop = element.offsetTop;

            var step = (target - current) / (speed * (1));

            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            if (count == 4)
                console.log(" step  " + step);

            element.style[attr] = (current + step) + "px";

            if ((step + current) != target) {
                flag = false;
            }
        }

        if (flag) {
            clearInterval(element.timeId);
            count++;

            console.log(" count "+count);

            if (count==4) {
                fn();
            }
        }
    }, 20);

}


function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr] || 0;
}
