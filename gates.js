// defines a function for each basic gate

// possible drag and drop implementation for gates

function or(x, y) {
    if(x || y) {
        return true;
    }
    return false;
}
function and(x, y) {
    if(x && y) {
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
    return !x;
}
function nor(x, y) {
    if(!x && !y) {
        return true;
    }
    return false
}
function nand(x, y) {
    if(x && y) {
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