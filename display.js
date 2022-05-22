const active = "rgb(0, 255, 0)";
const deactive = "rgb(255, 0, 0)";
const unselected = "rgb(0, 0, 0)";

// draw gate functions

function drawAnd(x, y, out) {
    clearCanvas();
    var canvas = document.getElementById('circle');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(100, 100);
        ctx.beginPath();
        ctx.arc(110,65,15,1.5 * Math.PI,0.5 * Math.PI,false);
        ctx.lineTo(100, 80);
        ctx.lineTo(100, 50);
        ctx.lineTo(110, 50);
        ctx.stroke();
    }
}
function drawOr(x, y, out) {
    clearCanvas();
    var canvas = document.getElementById('circle');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(100, 100);
        ctx.beginPath();
        ctx.arc(100,100,50,1.5 * Math.PI,1.75 * Math.PI,false);
        ctx.arc(100,30,50,0.25 * Math.PI,0.5 * Math.PI,false);
        ctx.arc(52,65, 50, 0.1 * Math.PI,1.9 * Math.PI,true);
        ctx.stroke();

    }
}
function drawXor(x, y, out) {
    clearCanvas();
    drawOr(true, true, true);
    var canvas = document.getElementById('circle');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(42, 65);
        ctx.beginPath();
        ctx.arc(42,65, 50, 0.1 * Math.PI,1.9 * Math.PI,true);
        ctx.stroke();
    }
}
function drawNot(x, out) {
    clearCanvas();
    var canvas = document.getElementById('circle');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(100, 75);
        ctx.lineTo(100,55);
        ctx.lineTo(130, 65);
        ctx.arc(135,65,5,1 * Math.PI,3 * Math.PI,false);
        ctx.lineTo(100,75);
        ctx.stroke();
    }
}
function drawNor(x, y, out) {
    clearCanvas();
    var canvas = document.getElementById('circle');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(100, 100);
        ctx.beginPath();
        ctx.arc(100,100,50,1.5 * Math.PI,1.75 * Math.PI,false);
        ctx.arc(140,65,5,1 * Math.PI,3 * Math.PI,false);
        ctx.arc(100,30,50,0.25 * Math.PI,0.5 * Math.PI,false);
        ctx.arc(52,65, 50, 0.1 * Math.PI,1.9 * Math.PI,true);
        ctx.stroke();

    }
}
function drawNand(x, y, out) {
    clearCanvas();
    var canvas = document.getElementById('circle');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(100, 100);
        ctx.beginPath();
        ctx.arc(110,65,15,1.5 * Math.PI,0 * Math.PI,false);
        ctx.arc(130,65,5,1 * Math.PI,3 * Math.PI,false);
        ctx.arc(110,65,15,0 * Math.PI,0.5 * Math.PI,false);
        ctx.lineTo(100, 80);
        ctx.lineTo(100, 50);
        ctx.lineTo(110, 50);
        ctx.stroke();
    }
}
function drawXnor(x, y, out) {
    clearCanvas();
    drawNor(true, true, true);
    var canvas = document.getElementById('circle');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(42, 65);
        ctx.beginPath();
        ctx.arc(42,65, 50, 0.1 * Math.PI,1.9 * Math.PI,true);
        ctx.stroke();
    }
}
function clearCanvas() {
    var c = document.getElementById("circle");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
}
