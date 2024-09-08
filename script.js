// Cálculo inicial de USDT
let usdtAmount = 0;
let usdtAfterFee = 0;
let finalEuros = 0;  // Variable para almacenar el resultado final en euros

document.getElementById('priceCalculator').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtiene los valores de los inputs
    const euros = parseFloat(document.getElementById('euros').value);
    const usdtPrice = parseFloat(document.getElementById('usdtPrice').value);

    // Calcula la cantidad de USDT
    usdtAmount = euros / usdtPrice;

    // Muestra el resultado
    const resultText = `Con ${euros.toFixed(2)}€ al precio de ${usdtPrice}€ por USDT, recibirás aproximadamente ${usdtAmount.toFixed(4)} USDT.`;
    document.getElementById('resultText').textContent = resultText;
});

// Cálculo de la comisión de 1.3 USDT
document.getElementById('calculateFee').addEventListener('click', function() {
    if (usdtAmount === 0) {
        document.getElementById('feeResultText').textContent = "Primero calcula la cantidad de USDT.";
        return;
    }

    usdtAfterFee = usdtAmount - 1.3;

    // Muestra el resultado después de restar la comisión de 1.3 USDT
    const feeResultText = `Después de restar 1.3 USDT por el envío, recibirás aproximadamente ${usdtAfterFee.toFixed(4)} USDT.`;
    document.getElementById('feeResultText').textContent = feeResultText;
});

// Cálculo del cambio de USDT después del 1% de anuncio y venta
document.getElementById('calculateChange').addEventListener('click', function() {
    if (usdtAfterFee === 0) {
        document.getElementById('changeResultText').textContent = "Primero calcula el USDT después de restar 1.3 USDT.";
        return;
    }

    // Aplica el 1% por crear el anuncio
    const usdtAfterAdFee = usdtAfterFee * 0.99;

    // Obtiene el precio de venta del input
    const sellPrice = parseFloat(document.getElementById('sellPrice').value);

    if (isNaN(sellPrice) || sellPrice <= 0) {
        document.getElementById('changeResultText').textContent = "Introduce un precio de venta válido.";
        return;
    }

    // Calcula el valor final en euros al precio de venta
    finalEuros = usdtAfterAdFee * sellPrice;

    // Muestra el resultado final
    const changeResultText = `Después de aplicar el 1% por crear el anuncio y vender a ${sellPrice}Bolos por USDT, recibirás aproximadamente ${finalEuros.toFixed(2)}Bolos.`;
    document.getElementById('changeResultText').textContent = changeResultText;
});

// División del resultado de la venta
document.getElementById('divideResult').addEventListener('click', function() {
    if (finalEuros === 0) {
        document.getElementById('divisionResultText').textContent = "Primero calcula el resultado de la venta.";
        return;
    }

    // Obtiene el número por el cual se dividirá el resultado
    const divideBy = parseFloat(document.getElementById('divideBy').value);

    if (isNaN(divideBy) || divideBy <= 0) {
        document.getElementById('divisionResultText').textContent = "Introduce un número válido para dividir.";
        return;
    }

    // Realiza la división
    const dividedResult = finalEuros / divideBy;

    // Muestra el resultado de la división
    const divisionResultText = `El resultado de dividir ${finalEuros.toFixed(2)}Bolos entre ${divideBy} es aproximadamente ${dividedResult.toFixed(2)}$.`;
    document.getElementById('divisionResultText').textContent = divisionResultText;
});
