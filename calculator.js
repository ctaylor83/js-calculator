// Basic math functions
function add(a, b) {
    return a + b;
  }
  
function subtract(a, b) {
    return a - b;
}
  
function multiply(a, b) {
    return a * b;
}
  
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}
  
// Operate function
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Error: Operator not recognized.";
    }
}
  
// Variables to store the first number, operator, and second number
let firstNumber = "";
let operator = "";
let secondNumber = "";
let isSecondNumber = false;
  
// Get the display and buttons
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
  
// Add event listeners to the buttons
buttons.map(button => {
    button.addEventListener('click', e => {
        if (e.target.classList.contains('number')) {
            if (!isSecondNumber) {
                firstNumber += e.target.innerText;
                display.innerText = firstNumber;
            } else {
                secondNumber += e.target.innerText;
            display.innerText = secondNumber;
            }
        } else if (e.target.classList.contains('operator')) {
            operator = e.target.innerText;
            isSecondNumber = true;
        } else if (e.target.classList.contains('equals')) {
            display.innerText = operate(operator, Number(firstNumber), Number(secondNumber));
            firstNumber = "";
            operator = "";
            secondNumber = "";
            isSecondNumber = false;
        } else if (e.target.classList.contains('clear')) {
            firstNumber = "";
            operator = "";
            secondNumber = "";
            isSecondNumber = false;
            display.innerText = "0";
        } else if (e.target.classList.contains('backspace')) {
            if (!isSecondNumber) {
                firstNumber = firstNumber.slice(0, -1);
                display.innerText = firstNumber;
            } else {
                secondNumber = secondNumber.slice(0, -1);
                display.innerText = secondNumber;
            }
        }
    });
});
  