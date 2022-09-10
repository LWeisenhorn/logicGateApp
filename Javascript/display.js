const active = "rgb(0, 133, 133)";
const deactive = "rgb(199, 82, 42)";
const unselected = "rgb(0, 0, 0)";
let gateName = '';
// draw gate functions

function drawAnd(x, y, out) {
    gateName = 'AND';
    document.getElementById("logicExpression").innerHTML = "Logical Expression: xy";
    fillTruthTable(0, 0, 0, 1);
    selectRow(y, x);
    clearCanvas();
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.arc(190,195,45,1.5 * Math.PI,0.5 * Math.PI,false);
        ctx.lineTo(160, 240);
        ctx.lineTo(160, 150);
        ctx.lineTo(190, 150);
        ctx.stroke();
        ctx.closePath();
    
        andInput(x, y);

        // output
        ctx.beginPath();
        if(out) {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(237, 195);
        ctx.lineTo(351, 195);
        ctx.stroke();
        ctx.closePath();
    }
}
function drawOr(x, y, out, drawInputs) {
    gateName = 'OR';
    document.getElementById("logicExpression").innerHTML = "Logical Expression: x + y";
    fillTruthTable(0, 1, 1, 1);
    selectRow(y, x);
    clearCanvas();
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.arc(160,300,150,1.5 * Math.PI,1.75 * Math.PI,false);
        ctx.arc(160,90,150,0.25 * Math.PI,0.5 * Math.PI,false);
        ctx.arc(16,194,150,0.1 * Math.PI,1.9 * Math.PI,true);
        ctx.stroke();

        if(drawInputs) {
            orInput(x, y);
        }
        // output
        ctx.beginPath();
        if(out) {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(268, 195);
        ctx.lineTo(351, 195);
        ctx.stroke();
        ctx.closePath();
    }
}
function drawXor(x, y, out) {
    clearCanvas();
    drawOr(true, true, false);
    gateName = 'XOR';
    document.getElementById("logicExpression").innerHTML = "Logical Expression: (xy' + x'y)";
    fillTruthTable(0, 1, 1, 0);
    selectRow(y, x);
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.arc(-5, 195, 150, 0.1 * Math.PI, 1.9 * Math.PI, true);
        ctx.stroke();

        xorInput(x, y);
    }
}
function drawNot(x, out) {
    gateName = 'NOT';
    document.getElementById("logicExpression").innerHTML = "Logical Expression: x'";
    notTruthTable();
    notSelectRow(x);
    clearCanvas();
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.moveTo(160, 225);
        ctx.lineTo(160,165);
        ctx.lineTo(235, 195);
        ctx.arc(245,195,10,1 * Math.PI,3 * Math.PI,false);
        ctx.lineTo(160,225);
        ctx.stroke();
    
        // input
        ctx.beginPath();
        if(x === 'true') {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.lineTo(75,195);
        ctx.lineTo(158,195);

        ctx.stroke();
        ctx.closePath();

        // output
        ctx.beginPath();
        if(out) {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(256, 195);
        ctx.lineTo(351, 195);
        ctx.stroke();
        ctx.closePath();
    }
    refresh();
}
function drawNor(x, y, out, drawInputs) {
    gateName = 'NOR';
    document.getElementById("logicExpression").innerHTML = "Logical Expression: (x + y)'";
    fillTruthTable(1, 0, 0, 0);
    selectRow(y, x);
    clearCanvas();
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.arc(160,300,150,1.5 * Math.PI,1.75 * Math.PI,false);
        ctx.arc(277,195,10,1 * Math.PI,3 * Math.PI,false);
        ctx.arc(160,90,150,0.25 * Math.PI,0.5 * Math.PI,false);
        ctx.arc(16,194,150,0.1 * Math.PI,1.9 * Math.PI,true);
        ctx.stroke();

        if(drawInputs) {
            orInput(x, y);
        }

        norOutput(out);
    }
}
function drawNand(x, y, out) {
    gateName = 'NAND';
    document.getElementById("logicExpression").innerHTML = "Logical Expression: (xy)'";
    fillTruthTable(1, 1, 1, 0);
    selectRow(y, x);
    clearCanvas();
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.strokeStyle = unselected;

        ctx.arc(190,195,45,1.5 * Math.PI,0 * Math.PI,false);
        ctx.arc(245,195,10,1 * Math.PI,3 * Math.PI,false);
        ctx.arc(190,195,45,0 * Math.PI,0.5 * Math.PI,false);
        ctx.lineTo(160, 240);
        ctx.lineTo(160, 150);
        ctx.lineTo(190, 150);
        ctx.stroke();

        andInput(x, y);

        // output
        ctx.beginPath();
        if(out) {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(256, 195);
        ctx.lineTo(351, 195);
        ctx.stroke();
        ctx.closePath();
    }
}
function drawXnor(x, y, out) {
    clearCanvas();
    drawNor(true, true, true);
    gateName = 'XNOR';
    document.getElementById("logicExpression").innerHTML = "Logical Expression: (xy + x'y')";
    fillTruthTable(1, 0, 0, 1);
    selectRow(y, x);
    var canvas = document.getElementById('gateCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 3;
        ctx.moveTo(42, 65);
        ctx.beginPath();
        ctx.strokeStyle = unselected;
        ctx.arc(-5, 195, 150, 0.1 * Math.PI, 1.9 * Math.PI, true);
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
        ctx.moveTo(75,240);
        ctx.lineTo(75,215);
        ctx.lineTo(142,215);
        ctx.stroke();
        ctx.closePath();

        // y input
        ctx.beginPath();
        if(y === 'true') {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(75,150);
        ctx.lineTo(75,174);
        ctx.lineTo(142,174);
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
        ctx.moveTo(75,240);
        ctx.lineTo(75,215);
        ctx.lineTo(158,215);
        ctx.stroke();
        ctx.closePath();

        // y input
        ctx.beginPath();
        if(y === 'true') {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(75,150);
        ctx.lineTo(75,174);
        ctx.lineTo(158,174);
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
        ctx.moveTo(75,240);
        ctx.lineTo(75,215);
        ctx.lineTo(163,215);
        ctx.stroke();
        ctx.closePath();

        // y input
        ctx.beginPath();
        if(y === 'true') {ctx.strokeStyle = active;}
        else {ctx.strokeStyle = deactive;}
        ctx.moveTo(75,150);
        ctx.lineTo(75,174);
        ctx.lineTo(163,174);
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
        ctx.moveTo(288, 195);
        ctx.lineTo(351, 195);
        ctx.stroke();
        ctx.closePath();

    }    
}
function fillTruthTable(row1, row2, row3, row4) {
    resetTruthTable();
    document.getElementById("00output").innerHTML = row1;
    document.getElementById("01output").innerHTML = row2;
    document.getElementById("10output").innerHTML = row3;
    document.getElementById("11output").innerHTML = row4;
}
function selectRow(input1, input2) {
    switch (true) {
        case input1 === "false" && input2 === "false":
            clearTable();
            document.getElementById("00input1").style.background = '#008585';
            document.getElementById("00input2").style.background = '#008585';
            document.getElementById("00output").style.background = '#008585';

            document.getElementById("00input1").style.color = '#FFFFFF';
            document.getElementById("00input2").style.color = '#FFFFFF';
            document.getElementById("00output").style.color = '#FFFFFF';
            break;
        case input1 === "false" && input2 === "true":
            clearTable();
            document.getElementById("01input1").style.background = '#008585';
            document.getElementById("01input2").style.background = '#008585';
            document.getElementById("01output").style.background = '#008585';

            document.getElementById("01input1").style.color = '#FFFFFF';
            document.getElementById("01input2").style.color = '#FFFFFF';
            document.getElementById("01output").style.color = '#FFFFFF';
            break;
        case input1 === "true" && input2 === "false":
            clearTable();
            document.getElementById("10input1").style.background = '#008585';
            document.getElementById("10input2").style.background = '#008585';
            document.getElementById("10output").style.background = '#008585';

            document.getElementById("10input1").style.color = '#FFFFFF';
            document.getElementById("10input2").style.color = '#FFFFFF';
            document.getElementById("10output").style.color = '#FFFFFF';
            break;
        case input1 === "true" && input2 === "true":
            clearTable();
            document.getElementById("11input1").style.background = '#008585';
            document.getElementById("11input2").style.background = '#008585';
            document.getElementById("11output").style.background = '#008585';

            document.getElementById("11input1").style.color = '#FFFFFF';
            document.getElementById("11input2").style.color = '#FFFFFF';
            document.getElementById("11output").style.color = '#FFFFFF';
            break;    
    }

}
function clearTable() {
    let cells = document.getElementsByClassName("row");

    for(let i = 0; i < cells.length; i++) {
        cells[i].style.background = 'white';
    }
}
function notTruthTable() {
    document.getElementById("truthTable").innerHTML = 
    '<tr><th>X</th><th>Z (output)</th></tr><tr><td class="row" id="00input1">0</td><td class="row" id="00output">1</td></tr><tr><td class="row" id="10input1">1</td><td class="row" id="10output">0</td></tr>';
}
function notSelectRow(input1) {
    clearTable();
    if(input1 == 'false') {
        document.getElementById("00input1").style.background = '#008585';
        document.getElementById("00output").style.background = '#008585';
    }
    if(input1 == 'true') {
        document.getElementById("10input1").style.background = '#008585';
        document.getElementById("10output").style.background = '#008585';
    }
}
function resetTruthTable() {
    document.getElementById("truthTable").innerHTML =
    '<tr><th>X</th><th>Y</th><th>Z (output)</th></tr><tr><td class="row" id="00input1">0</td><td class="row" id="00input2">0</td><td class="row" id="00output"></td></tr><tr><td class="row" id="01input1">0</td><td class="row" id="01input2">1</td><td class="row" id="01output"></td></tr><tr><td class="row" id="10input1">1</td><td class="row" id="10input2">0</td><td class="row" id="10output"></td></tr><tr><td class="row" id="11input1">1</td><td class="row" id="11input2">1</td><td class="row" id="11output"></td></tr>';
}
function refresh() {
    switch(gateName) {
        case 'AND':
            drawAnd(input1(), input2(), andCalc());
            break;
        case 'OR':
            drawOr(input1(), input2(), orCalc(), true);
            break;
        case 'XOR':
            drawXor(input1(), input2(), xorCalc(), false);
            break;
        case 'NOT':
            drawNot(input2(), notCalc());
            break;
        case 'NOR':
            drawNor(input1(), input2(), norCalc(), true);
            break;
        case 'NAND':
            drawNand(input1(), input2(), nandCalc());
            break;
        case 'XNOR':
            drawXnor(input1(), input2(), xnorCalc());
            break;

    }
}