const active = "rgb(0, 255, 0)";
const deactive = "rgb(255, 0, 0)";
const unselected = "rgb(0, 0, 0)";

// draw gate functions

function drawAnd(x, y, out) {
    clearCanvas();
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(100, 100);
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.arc(110,65,15,1.5 * Math.PI,0.5 * Math.PI,false);
        ctx.lineTo(100, 80);
        ctx.lineTo(100, 50);
        ctx.lineTo(110, 50);
        ctx.stroke();
        ctx.closePath();
    
        andInput(x, y);

        // output
        ctx.beginPath();
        if(out) {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(125, 65);
        ctx.lineTo(160, 65);
        ctx.stroke();
        ctx.closePath();
    }
}
function drawOr(x, y, out, drawInputs) {
    clearCanvas();
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(100, 100);
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.arc(100,100,50,1.5 * Math.PI,1.75 * Math.PI,false);
        ctx.arc(100,30,50,0.25 * Math.PI,0.5 * Math.PI,false);
        ctx.arc(52,65, 50, 0.1 * Math.PI,1.9 * Math.PI,true);
        ctx.stroke();

        if(drawInputs) {
            orInput(x, y);
        }
        // output
        ctx.beginPath();
        if(out) {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(135, 65);
        ctx.lineTo(160, 65);
        ctx.stroke();
        ctx.closePath();

    }
}
function drawXor(x, y, out) {
    clearCanvas();
    drawOr(true, true, true);
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(42, 65);
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.arc(42, 65, 50, 0.1 * Math.PI, 1.9 * Math.PI, true);
        ctx.stroke();

        xorInput(x, y);
    }
}
function drawNot(x, out) {
    clearCanvas();
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.moveTo(100, 75);
        ctx.lineTo(100,55);
        ctx.lineTo(130, 65);
        ctx.arc(135,65,5,1 * Math.PI,3 * Math.PI,false);
        ctx.lineTo(100,75);
        ctx.stroke();
    
        // input
        ctx.beginPath();
        if(x === 'true') {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(42, 65);
        ctx.lineTo(100, 65);
        ctx.stroke();
        ctx.closePath();

        // output
        ctx.beginPath();
        if(out) {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(140, 65);
        ctx.lineTo(160, 65);
        ctx.stroke();
        ctx.closePath();
    }
}
function drawNor(x, y, out, drawInputs) {
    clearCanvas();
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(100, 100);
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.arc(100,100,50,1.5 * Math.PI,1.75 * Math.PI,false);
        ctx.arc(140,65,5,1 * Math.PI,3 * Math.PI,false);
        ctx.arc(100,30,50,0.25 * Math.PI,0.5 * Math.PI,false);
        ctx.arc(52,65, 50, 0.1 * Math.PI,1.9 * Math.PI,true);
        ctx.stroke();

        if(drawInputs) {
            orInput(x, y);
        }

        norOutput(out);
        

    }
}
function drawNand(x, y, out) {
    clearCanvas();
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(100, 100);
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.arc(110,65,15,1.5 * Math.PI,0 * Math.PI,false);
        ctx.arc(130,65,5,1 * Math.PI,3 * Math.PI,false);
        ctx.arc(110,65,15,0 * Math.PI,0.5 * Math.PI,false);
        ctx.lineTo(100, 80);
        ctx.lineTo(100, 50);
        ctx.lineTo(110, 50);
        ctx.stroke();

        andInput(x, y);

        // output
        ctx.beginPath();
        if(out) {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(135, 65);
        ctx.lineTo(160, 65);
        ctx.stroke();
        ctx.closePath();
    }
}
function drawXnor(x, y, out) {
    clearCanvas();
    drawNor(true, true, true);
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.moveTo(42, 65);
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.arc(42, 65, 50, 0.1 * Math.PI, 1.9 * Math.PI, true);
        ctx.stroke();
        ctx.closePath();

        xorInput(x, y);
        norOutput(out);
    }
}
function clearCanvas() {
    var c = document.getElementById("gateCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
}
function xorInput(x, y) {
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // x input
        ctx.beginPath();
        if(x === 'true') {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(50,80);
        ctx.lineTo(50,72);
        ctx.lineTo(90,72);
        ctx.stroke();
        ctx.closePath();

        // y input
        ctx.beginPath();
        if(y === 'true') {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(50,50);
        ctx.lineTo(50,58);
        ctx.lineTo(90,58);
        ctx.stroke();
        ctx.closePath();
    }
}
function andInput(x, y) {
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // x input
        ctx.beginPath();
        if(x === 'true') {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(50,80);
        ctx.lineTo(50,72);
        ctx.lineTo(100,72);
        ctx.stroke();
        ctx.closePath();

        // y input
        ctx.beginPath();
        if(y === 'true') {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(50,50);
        ctx.lineTo(50,58);
        ctx.lineTo(100,58);
        ctx.stroke();
        ctx.closePath();
    }
}
function orInput(x, y) {
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // x input
        ctx.beginPath();
        if(x === 'true') {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(50,80);
        ctx.lineTo(50,72);
        ctx.lineTo(100,72);
        ctx.stroke();
        ctx.closePath();

        // y input
        ctx.beginPath();
        if(y === 'true') {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(50,50);
        ctx.lineTo(50,58);
        ctx.lineTo(100,58);
        ctx.stroke();
        ctx.closePath();
    }
}
function norOutput(out) {
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        if(out) {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(145, 65);
        ctx.lineTo(160, 65);
        ctx.stroke();
        ctx.closePath();

    }    
}
