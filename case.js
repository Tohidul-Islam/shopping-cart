/*
1. add event listenrer to the case plus button
2. get the value inside the case number field input field
3. convert the number to ad integer
4.calcualte the new case number 
5.set the value to case number field
*/
function caseNumberPlusMinus(isIncrease) {
    const caseCountField = document.getElementById('case-count-field');
    const caseCountString = caseCountField.value;
    const caseCount = parseInt(caseCountString);
    let newCaseCount;
    if (isIncrease === true) {
        newCaseCount = caseCount + 1;
    }
    else {
        newCaseCount = caseCount - 1;

        if (newCaseCount < 0) {
            alert('You cant use negative number');
            return;
        }
    }
    caseCountField.value = newCaseCount;
    return newCaseCount;
}


function updateCaseTotalPrice(caseCount) {
    const newCasePrice = caseCount * 59;
    const caseTotalElement = document.getElementById('case-price');
    caseTotalElement.innerText = newCasePrice;

}




document.getElementById('case-plus-btn').addEventListener('click', function () {
    // const caseCountField = document.getElementById('case-count-field');
    // const caseCountString = caseCountField.value;
    // const caseCount = parseInt(caseCountString);
    // const newCaseCount = caseCount + 1;
    // caseCountField.value = newCaseCount;
    const newCaseNumber = caseNumberPlusMinus(true);
    updateCaseTotalPrice(newCaseNumber);
    setTotalAmount();

})


document.getElementById('case-minus-btn').addEventListener('click', function () {
    // const caseCountField = document.getElementById('case-count-field');
    // const caseCountString = caseCountField.value;
    // const caseCount = parseInt(caseCountString);
    // const newCaseCount = caseCount - 1;
    // if (newCaseCount < 1) {
    //     alert('You cant use negative number');
    //     return;
    // }
    // caseCountField.value = newCaseCount;

    const newCaseNumber = caseNumberPlusMinus(false);
    updateCaseTotalPrice(newCaseNumber);
    setTotalAmount();

})


document.getElementById('case-cross').addEventListener('click', function () {
    const fullCaseSection = document.getElementById('case-section');
    fullCaseSection.style.display = 'none';

})

