// calculates the outputs with gates.js to use in display.js

// ids are flipped so input one corresponds to the top line on drawing
function input1() {
    return document.getElementById("input2").value;
}
function input2() {
    return document.getElementById("input1").value;
}

function orCalc() {
    return output = or(input1(), input2());
}
function andCalc() {
    return output = and(input1(), input2());
}
function nandCalc() {
    return output = nand(input1(), input2());
}
function norCalc() {
    return output = nor(input1(), input2());
}
function notCalc() {
    return output = nor(input1());
}
function xorCalc() {
    return output = xor(input1(), input2());
}
function xnorCalc() {
    return output = xnor(input1(), input2());
}