let buttons = document.getElementsByTagName("button");

function clickAnd() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#74A892";
    }
    document.getElementById("andButton").style.backgroundColor = "#0c7f7f";
    drawAnd(input1(), input2(), andCalc());
}
function clickOr() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#74A892";
    }
    document.getElementById("orButton").style.backgroundColor = "#0c7f7f";
    drawOr(input1(), input2(), orCalc(), true);
}
function clickNand() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#74A892";
    }
    document.getElementById("nandButton").style.backgroundColor = "#0c7f7f";
    drawNand(input1(), input2(), nandCalc());
}
function clickNor() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#74A892";
    }
    document.getElementById("norButton").style.backgroundColor = "#0c7f7f";
    drawNor(input1(), input2(), norCalc(), true);
}
function clickNot() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#74A892";
    }
    document.getElementById("notButton").style.backgroundColor = "#0c7f7f";
    drawNot(input1(), notCalc());
}
function clickXnor() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#74A892";
    }
    document.getElementById("xnorButton").style.backgroundColor = "#0c7f7f";
    drawXnor(input1(), input2(), xnorCalc());
}
function clickXor() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#74A892";
    }
    document.getElementById("xorButton").style.backgroundColor = "#0c7f7f";
    drawXor(input1(), input2(), xorCalc());
}