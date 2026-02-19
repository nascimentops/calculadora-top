let currentNumber = "";
let accumulator = "";
let operator = "";

const numberButtons = document.querySelectorAll(".number");
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", (e) => {
        currentNumber += e.target.textContent;
        changeDisplayContent(currentNumber);
    });
};

const display = document.querySelector(".display");
function changeDisplayContent(content) {
    if (content.length >= 15 && content.includes(".")){
        display.textContent = Number(content).toFixed(5);
    } else {
    display.textContent = content;
    };
}

const operators = document.querySelectorAll(".operator");
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", (e) => {
        const clickedOperator = e.target.textContent;
        if (!accumulator && currentNumber){
            accumulator = currentNumber;
            currentNumber = "";
            changeDisplayContent(currentNumber);
        } else if (currentNumber) {
            operationResult();
            changeDisplayContent(accumulator);
        } else {
            changeDisplayContent("");
        }
        changeOperator(clickedOperator);
    })
}
function changeOperator(newOperator) {
    operator = newOperator;
};

const clear = document.querySelector("#clear");
clear.addEventListener("click", resetNumbersAndOperator);


const equal = document.querySelector("#equal")
equal.addEventListener("click", () => {
    if (!currentNumber || !accumulator || !operator) return;
    operationResult();
    changeDisplayContent(accumulator);
})



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
    num1 = Number(num1);
    num2 = Number(num2);
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

function resetNumbersAndOperator(){
    currentNumber = "";
    accumulator = "";
    operator = "";
    changeDisplayContent("");
}

function operationResult(){
    const result = operate(operator, accumulator, currentNumber);

    if (result === "ERROR"){
        resetNumbersAndOperator();
        changeDisplayContent("ERROR");
        return;
    }
    accumulator = String(result);
    currentNumber = "";
}