const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal")

let number1 = "";
let number2 = "";
let operator = "";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        number1 += e.target.textContent;
        display.textContent = number1;
    });
};

clear.addEventListener("click", () => {
    number1 = "";
    number2 = "";
    display.textContent = "";
    operator = "";
});

equal.addEventListener("click", () => {
    if (!number1 || !number2 || !operator) return;
    number2 = String(operate(operator, Number(number2), Number(number1)));
    number1 = "";
    if (number2.length >= 15 && number2.split("").includes(".")){
        display.textContent = Number(number2).toFixed(5);
    } else {
    display.textContent = number2;
    }
    number2 = "";
})

for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", (e) => {
        if (!number2 && number1){
            number2 = number1;
            number1 = "";
            display.textContent = number1;
            operator = e.target.textContent;
        } else if (number1) {
            number2 = String(operate(operator, Number(number2), Number(number1)));
            number1 = "";
            if (number2.length >= 15 && number2.split("").includes(".")){
                display.textContent = Number(number2).toFixed(5);
            } else {
                display.textContent = number2;
            }
            operator = e.target.textContent;
        } else {
            operator = e.target.textContent;
        }
    })
}

function add (a, b) {
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0){
        return "ERROR";
    }
    return a / b;
};

function operate(operator, num1, num2){
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    };
};