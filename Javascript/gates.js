// defines a function for each basic gate

function or(x, y) {
    if(x === 'true' || y === 'true') {
        return true;
    }
    return false;
}
function and(x, y) {
    if(x === "true" && y === 'true') {
        return true;
    }
    return false;
}
function xor(x, y) {
    if(x != y) {
        return true;
    }
    return false;
}
function not(x) {
    if(x === 'true') {
        return false;
    }
    else {
        return true;
    }
}
function nor(x, y) {
    if(x === 'false' && y === 'false') {
        return true;
    }
    return false
}
function nand(x, y) {
    if(x === 'true' && y === 'true') {
        return false;
    }
    return true;
}
function xnor(x, y) {
    if(x === y) {
        return true;
    }
    return false;
}