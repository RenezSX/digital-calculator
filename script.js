function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === 'Erro') {
        display.value = '';
}
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