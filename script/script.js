let result = document.getElementById('result');
let operator = '';
let operand1 = '';
let operand2 = '';

function appendNumber(number) {
    result.value += number;
}

function setOperator(op) {
    operator = op;
    operand1 = result.value;
    result.value = '';
}

function clearDisplay() {
    result.value = '';
    operator = '';
    operand1 = '';
    operand2 = '';
}

function calculate() {
    operand2 = result.value;
    let res = '';
    switch (operator) {
        case '+':
            res = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            res = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            res = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            res = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    result.value = res;
}