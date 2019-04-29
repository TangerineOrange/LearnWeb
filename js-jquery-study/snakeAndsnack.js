
var square1 = document.getElementById("square1");
var btnStart = document.getElementById("START-btn");

var block = document.createElement("div");
var snakeHead = document.createElement("div");

var snakeInfo = [
    {"top": 100, "left": 100}
];

var topD = 1;
var rightD = 2;
var bottomD = 3;
var leftD = 4;

var nowMoveDirection = bottomD;

//设定 snack和snake的位置
init();

//给 snake 添加两个身体
// addSnake(topD);
// addSnake(topD);

var interval = setInterval(function () {
    //设定 snake移动的方向
    setSnakeMoveDirection();
    //开始移动！
    snakeMove();
}, 200);
// keyCode 37 = Left           keyCode 38 = Up             keyCode 39 = Right        keyCode 40 = Down
// event.key  = ArrowLeft     event.key  = ArrowUp      event.key  = ArrowRight    event.key  = ArrowDown
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Should do nothing if the default action has been cancelled
    }
    var handled = false;
    if (event.key !== undefined) {
        switch (event.key) {
            case "ArrowUp":
                nowMoveDirection=topD;
                break;
            case "ArrowRight":
                nowMoveDirection=rightD;
                break;
            case "ArrowDown":
                nowMoveDirection=bottomD;
                break;
            case "ArrowLeft":
                nowMoveDirection=leftD;
                break;
            default:
                break;
        }
        handled = true;
        // Handle the event with KeyboardEvent.key and set handled true.
    } else if (event.keyIdentifier !== undefined) {
        handled = true;
        // Handle the event with KeyboardEvent.keyIdentifier and set handled true.
    } else if (event.keyCode !== undefined) {
        handled = true;
        // Handle the event with KeyboardEvent.keyCode and set handled true.
    }

    if (handled) {
        // Suppress "double action" if event handled
        event.preventDefault();
    }
}, true);

btnStart.onclick = function () {
};

function init() {
    block.style.backgroundColor = "mediumseagreen";
    block.style.top = "0";
    block.style.left = "0";

    snakeHead.style.backgroundColor = "gold";
    snakeHead.style.top = "0";
    snakeHead.style.left = "0";

    square1.appendChild(block);
    square1.appendChild(snakeHead);

    //一排25个 0-24，一块20px,一共500px
    randomSnack();
}

function randomSnack() {
    block.style.top = Math.floor(Math.random() * 25) * 20 + "px";
    block.style.left = Math.floor(Math.random() * 25) * 20 + "px";
}

function addSnake() {
    var snakeBody = document.createElement("div");
    snakeBody.style.backgroundColor = "hotpink";
    // snakeBody.
    square1.appendChild(snakeBody);
    //direction:top,right,bottom,left   1,2,3,4
    snakeInfo.push({"top": snakeBody.offsetTop, "left": snakeBody.offsetLeft});
}

function setSnakeMoveDirection() {
    var top = snakeInfo[0].top;
    var left = snakeInfo[0].left;

    var snakeInfoItem = {"top": 0, "left": 0};
    //direction:top,right,bottom,left   1,2,3,4
    switch (nowMoveDirection) {
        case 1:
            snakeInfoItem.top = top - 20;
            snakeInfoItem.left = left;
            break;
        case 2:
            snakeInfoItem.top = top;
            snakeInfoItem.left = left + 20;
            break;
        case 3:
            snakeInfoItem.top = top + 20;
            snakeInfoItem.left = left;
            break;
        case 4:
            snakeInfoItem.top = top;
            snakeInfoItem.left = left - 20;
            break;
        default:
            break;
    }
    //检测游戏是否结束
    snakeInfo.unshift(snakeInfoItem);
    snakeInfo.pop();
    gameOver(snakeInfoItem);
}

function getSnakeDiv() {
    var divs = square1.getElementsByTagName("div");
    var snakeDiv = [];

    for (var j = 1; j < divs.length; j++) {
        snakeDiv.push(divs[j]);
    }
    return snakeDiv;
}

function snakeMove() {
    var divs = getSnakeDiv();
    if (divs.length === snakeInfo.length)
        for (var i = 0; i < snakeInfo.length; i++) {
            divs[i].style.top = snakeInfo[i].top + "px";
            divs[i].style.left = snakeInfo[i].left + "px";
        }

    if (snakeHead.offsetTop === block.offsetTop && snakeHead.offsetLeft === block.offsetLeft) {
        addSnake();
        randomSnack();
    }
}

function gameOver(snakeInfoItem) {

    console.log("game Over  "+snakeInfoItem.top);
    console.log("game Over  "+snakeInfoItem.left);
    if (snakeInfoItem.top<=0||snakeInfoItem.left<=0|snakeInfoItem.top>=480||snakeInfoItem.left>=480) {
        clearInterval(interval);
        return true;
    }
    return false;
}
