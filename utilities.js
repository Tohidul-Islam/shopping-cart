function setPriceById(elementId) {
    const elementAmount = document.getElementById(elementId);
    const elementAmountString = elementAmount.innerText;
    const elementOriginalAmount = parseInt(elementAmountString);
    return elementOriginalAmount;
}

function setTotalAmount() {
    const phoneTotalAmount = setPriceById('phone-price');
    const caseTotalAmount = setPriceById('case-price');

    const subTotal = document.getElementById('subtotal');
    const newSubTotalAmount = phoneTotalAmount + caseTotalAmount;
    subTotal.innerText = newSubTotalAmount;


    const taxAmountElement = document.getElementById('tax-amount');
    const totalTaxAmountString = (newSubTotalAmount * 0.1).toFixed(2);
    const totalTaxAmount = parseFloat(totalTaxAmountString);
    taxAmountElement.innerText = totalTaxAmount;

    const finalAmountElement = document.getElementById('final-total');
    finalAmountElement.innerText = newSubTotalAmount + totalTaxAmount;
}