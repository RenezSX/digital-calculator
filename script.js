function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const expression = display.value.replace(/x/g, '*').replace(/÷/g, '/');
        display.value = eval(expression);
    } catch {
        display.value = 'Erro'; 
    }
}