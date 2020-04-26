var firstVal = 0.0;
var secondVal = 0.0;
var operation = "";

function storeVal(operater){
    let displayOut = document.querySelector('#currValue');
    firstVal = parseFloat(displayOut.value);
    operation = operater;
    displayOut.value  = "";
}

function add(val1, val2){
    return val1 + val2;
}

function subt(val1, val2){
    return val1 - val2;
}

function mult(val1, val2){
    return val1 * val2;
}

function divi(val1, val2){
    return val1 / val2;
}

function calculate(){
    let displayOut = document.querySelector('#currValue');
    secondVal = parseFloat(displayOut.value);

    if (operation == "add"){
        displayOut.value = add(firstVal, secondVal);
    }
    if (operation == "sub"){
        displayOut.value = subt(firstVal, secondVal);
    }
    if (operation == "div"){
        displayOut.value = divi(firstVal, secondVal);
    }
    if (operation == "mul"){
        displayOut.value = mult(firstVal, secondVal);
    }
}

function putOnDisplay(digit){
    let displayOut = document.querySelector('#currValue');
    var pressedDigit = parseFloat(digit);
    displayOut.value = displayOut.value + pressedDigit;
}

function putPoint(){
    let displayOut = document.querySelector('#currValue');
    displayOut.value = displayOut.value + ".";
}

function clear(){
    let displayOut = document.querySelector('#currValue');
    displayOut.value = "";
}