
var nicheng = document.getElementById("nicheng");

var comment = document.getElementById("conmment");
var btn = document.getElementById("btn");
var tbd = document.getElementById("tbd");

btn.onclick = function () {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");

    td.innerText = nicheng.value;
    td2.innerText = comment.value;

    tr.appendChild(td);
    tr.appendChild(td2);
    tbd.appendChild(tr);
}
