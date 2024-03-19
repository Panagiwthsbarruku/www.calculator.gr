function appendToResult(value) {
    document.getElementById('result').innerText += value;
}
function clearResult() {
    document.getElementById('result').innerText = '';
}
function calculate() {
    const result = eval(document.getElementById('result').innerText);
    document.getElementById('result').innerText = result;
}
