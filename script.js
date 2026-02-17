const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const clear = document.querySelector("#clear");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        display.textContent += e.target.textContent;
    });
};

clear.addEventListener("click", () => {
    display.textContent = "";
});

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