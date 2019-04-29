
var tab = document.getElementsByClassName("tab-test")[0];

var as = tab.getElementsByTagName("a");
var lis = tab.getElementsByTagName("li");

var originColor = lis[0].style.backgroundColor;
for (var i = 0; i < as.length; i++) {

    as[i].setAttribute("index", i);
    as[i].onclick = function (ev) {
        for (var j = 0; j < lis.length; j++) {
            lis[j].style.backgroundColor = originColor;
        }
        lis[this.getAttribute("index")].style.backgroundColor = "#21dda8";
        return false;
    }
}
