let inputDisplay = document.getElementById('input-display');
let resultDisplay = document.getElementById('result-display');

function appendNumber(number) {
    inputDisplay.value += number;
}

function appendOperator(operator) {
    inputDisplay.value += ` ${operator} `;
}

function clearDisplay() {
    inputDisplay.value = '';
    resultDisplay.value = '';
}

function deleteLast() {
    inputDisplay.value = inputDisplay.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(inputDisplay.value);
        resultDisplay.value = result;
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}
