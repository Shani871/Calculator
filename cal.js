const resultElement = document.getElementById('result');
const toggleButton = document.getElementById('toggle-theme');
let isDarkMode = false;

function appendToDisplay(value) {
    resultElement.value += value;
}

function clearDisplay() {
    resultElement.value = '';
}

function deleteLast() {
    resultElement.value = resultElement.value.slice(0, -1);
}

function calculate() {
    try {
        resultElement.value = eval(resultElement.value);
    } catch (error) {
        resultElement.value = 'Error';
    }
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    isDarkMode = !isDarkMode;
    toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
