function convertToDollar() {
    const realValue = parseFloat(document.getElementById('realValue').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);

    if (isNaN(realValue) || isNaN(exchangeRate)) {
        document.getElementById('result').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const dollarValue = realValue / exchangeRate;
    document.getElementById('result').innerText = `Valor em dólares: $${dollarValue.toFixed(2)}`;
}