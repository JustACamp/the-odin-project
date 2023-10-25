// Operator functions 
function add (a,b) {return a + b;}
function sub (a,b) {return a - b;}
function mult (a,b) {return a * b;}
function div (a,b) {return a / b;}

const operate = () => {    
    switch (oper) {
        case "+": 
            return add(+num1,+num2);
        case "-": 
            return sub(num1,num2);
        case "*": 
            return mult(num1,num2);
        case "/":
            if(num2 === 0) {
                displayVar = "lmao";
                display.textContent = displayVar;
            } else {
            return div(num1,num2);
            }
    }
}
let num1 = "";
let num2 = "";
let oper = "";
let displayVar = "";
let result;
const buttons = document.querySelectorAll('button');
const calc = document.getElementById("calculator");
const display = document.getElementById("display");

// get elements from html
// could be done with querySelector all 
// document.addEventListener('keydown', function(e){
//     const key = document.querySelector(`button[data-key='${e.keyCode}']`);
//     key.click();
// });
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const button0 = document.getElementById('0');
const buttonPRD = document.getElementById('prd');
const buttonDEL = document.getElementById('del');
const buttonEqual = document.getElementById('equal');
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonDiv = document.getElementById('divi');
const buttonMult = document.getElementById('mult');
const buttonClear = document.getElementById('clear');

// add event listeners to buttons

function numInput (a) {
    if (oper == "") {
        displayVar += a;
        num1 += a;
        console.log("Num 1 is " + num1);
        console.log("Num 2 is " + num2);
    } else {
        displayVar += a;
        num2 += a;
        console.log("Num 1 is " + num1);
        console.log("Num 2 is " + num2);
    }
    display.textContent = displayVar;
}

function operInput (a) {
    if (oper == "") {
        oper = a;
        displayVar += oper;
        display.textContent = displayVar;
    } else if (oper !== "") {
        result = operate(+num1,+num2);
        num1 = result;
        num2 = "";
        oper = a;
        displayVar = result + a;
        display.textContent = displayVar;
    } 
}

function backspace () {
    displayVar = displayVar.slice(0, displayVar.length - 1);
    display.textContent = displayVar;
    if (num2 == "") {
        num1 = num1.slice(0,displayVar.length-1)
    }
}

//add click listeners
button1.addEventListener('click', function () {numInput("1")});
button2.addEventListener('click', function () {numInput("2")});
button3.addEventListener('click', function () {numInput("3")});
button4.addEventListener('click', function () {numInput("4")});
button5.addEventListener('click', function () {numInput("5")});
button6.addEventListener('click', function () {numInput("6")});
button7.addEventListener('click', function () {numInput("7")});
button8.addEventListener('click', function () {numInput("8")});
button9.addEventListener('click', function () {numInput("9")});
button0.addEventListener('click', function () {numInput("0")});
buttonPRD.addEventListener('click', function () {numInput(".")});
buttonDEL.addEventListener('click', function () {backspace()});


//add keyboard listeners
document.addEventListener('keydown', function (event) {
    let code = event.code;
    if (code === 'Digit1') {
        return numInput("1");
    } else if (code === 'Digit2') {
        return numInput("2");
    } else if (code === 'Digit3') {
        return numInput("3");
    } else if (code === 'Digit4') {
        return numInput("4");
    } else if (code === 'Digit5') {
        return numInput("5");
    } else if (code === 'Digit6') {
        return numInput("6");
    } else if (code === 'Digit7') {
        return numInput("7");
    } else if (code === 'Digit8') {
        return numInput("8");
    } else if (code === 'Digit9') {
        return numInput("9");
    } else if (code === 'Digit0') {
        return numInput("0");
    } else if (code === 'Period') {
        return numInput(".");
    } else if (code === 'Backspace') {
        return backspace();
    }
});

buttonPlus.addEventListener('click', function () {operInput("+")});
buttonMinus.addEventListener('click', function () {operInput("-")});
buttonMult.addEventListener('click', function () {operInput("*")});
buttonDiv.addEventListener('click', function () {operInput("/")});
buttonClear.addEventListener('click', () => {
    displayVar = "";
    oper = "";
    num1 = "";
    num2 = "";
    display.textContent = displayVar;
})
buttonEqual.addEventListener('click', () => {
    if(num2 == 0) {
        display.textContent = displayVar;
    } else {
        console.log(num1);
        console.log(num2);
        result = operate(+num1,+num2)
        displayVar = result;
        oper = "";
        num1 = result;
        num2 = "";
        display.textContent = displayVar;
    }
})

document.onkeydown = function (e) {
    console.log('key down');
    console.log(e);
  };