function getPhoneCount(isIncrease) {
    const phoneCountField = document.getElementById('phone-count-field');
    const phoneCountString = phoneCountField.value;
    const phoneCount = parseInt(phoneCountString);
    let newPhoneCount;
    if (isIncrease === true) {
        newPhoneCount = phoneCount + 1;
    }
    else {
        newPhoneCount = phoneCount - 1;
        if (newPhoneCount < 0) {
            alert('you cant use negative number!');
            return;
        }
    }
    phoneCountField.value = newPhoneCount;
    return newPhoneCount;
}

function phoneTotalPrice(phoneCountNumber) {
    const phoneTotalAmount = phoneCountNumber * 1219;
    const phoneTotal = document.getElementById('phone-price');
    phoneTotal.innerText = phoneTotalAmount;
}



document.getElementById('phone-plus-btn').addEventListener('click', function () {
    const phoneCount = getPhoneCount(true);
    phoneTotalPrice(phoneCount);

    // calculate subtotal amount
    setTotalAmount();
})

document.getElementById('phone-minus-btn').addEventListener('click', function () {
    const phoneCount = getPhoneCount(false);
    phoneTotalPrice(phoneCount);
    setTotalAmount();

})