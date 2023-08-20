// function ----------------------------|

// price function
function convertToNumber(priceId){
    const priceText = document.getElementById(priceId).innerText;
    const priceString = parseFloat(priceText).toFixed(2);
    const price = Number(priceString);
    return  price;
}

// setdisplay
function setDisplay(setId,displayTotalPrice ){
    const textValue = document.getElementById(setId);
    textValue.innerText = displayTotalPrice;
}
// buttun validetion-------------|

// function checkAmount() {
//     const totalPrice = document.getElementById('totalPrice');
//     // const makeBtn = document.getElementById('MakeBtn');

//     if (totalPrice > 0) {
//         document.getElementById("MakeBtn").disabled = false;
//         document.getElementById("MakeBtn").classList.remove("disabled");
//       }
    // if (parseFloat(totalPrice.innerText) > 0) {
    //     makeBtn.removeAttribute("disabled");
    // } else {
    //     makeBtn.setAttribute("disabled", "disabled");
    // }
// }

// addEventListener----------------------|
// first card addEventListener
document.getElementById('firstCard').addEventListener('click', function(){

    const cardPrice = convertToNumber('firstCardPrice');

    const totalPrice = convertToNumber('totalPrice');


    const displayTotalPrice = totalPrice + cardPrice;

    setDisplay('totalPrice' , displayTotalPrice.toFixed(2));
});
// second card addEventListener
document.getElementById('secondCard').addEventListener('click', function(){

    const cardPrice = convertToNumber('secondPrice');

    const totalPrice = convertToNumber('totalPrice');


    const displayTotalPrice = totalPrice + cardPrice;

    setDisplay('totalPrice' , displayTotalPrice.toFixed(2));
});
// second card addEventListener
document.getElementById('thirdCard').addEventListener('click', function(){

    const cardPrice = convertToNumber('thirdPrice');

    const totalPrice = convertToNumber('totalPrice');


    const displayTotalPrice = totalPrice + cardPrice;

    setDisplay('totalPrice' , displayTotalPrice.toFixed(2));
});
// fourth card addEventListener
document.getElementById('fourthcard').addEventListener('click', function(){

    const cardPrice = convertToNumber('fourthPrice');

    const totalPrice = convertToNumber('totalPrice');


    const displayTotalPrice = totalPrice + cardPrice;

    setDisplay('totalPrice' , displayTotalPrice.toFixed(2));
});
// five card addEventListener
document.getElementById('fivethCard').addEventListener('click', function(){

    const cardPrice = convertToNumber('fivethPrice');

    const totalPrice = convertToNumber('totalPrice');


    const displayTotalPrice = totalPrice + cardPrice;

    setDisplay('totalPrice' , displayTotalPrice.toFixed(2));
});
// six card addEventListener
document.getElementById('sixthcard').addEventListener('click', function(){

    const cardPrice = convertToNumber('sixthPrice');

    const totalPrice = convertToNumber('totalPrice');


    const displayTotalPrice = totalPrice + cardPrice;

    setDisplay('totalPrice' , displayTotalPrice.toFixed(2));
});
// seven Card addEventListener
document.getElementById('sevenCard').addEventListener('click', function(){

    const cardPrice = convertToNumber('sevenPrice');

    const totalPrice = convertToNumber('totalPrice');


    const displayTotalPrice = totalPrice + cardPrice;

    setDisplay('totalPrice' , displayTotalPrice.toFixed(2));
});
// eight CardaddEventListener
document.getElementById('eightCard').addEventListener('click', function(){

    const cardPrice = convertToNumber('eightPrice');

    const totalPrice = convertToNumber('totalPrice');


    const displayTotalPrice = totalPrice + cardPrice;

    setDisplay('totalPrice' , displayTotalPrice.toFixed(2));
});
// nineth CardaddEventListener
document.getElementById('ninethCard').addEventListener('click', function(){

    const cardPrice = convertToNumber('ninethPrice');

    const totalPrice = convertToNumber('totalPrice');


    const displayTotalPrice = totalPrice + cardPrice;

    setDisplay('totalPrice' , displayTotalPrice.toFixed(2));
});











// function checkInput() {
//     var inputField = document.getElementById("inputField");
//     var submitButton = document.getElementById("submitButton");
    
//     if (inputField.value.trim() !== "") {
//         submitButton.removeAttribute("disabled");
//     } else {
//         submitButton.setAttribute("disabled", "disabled");
//     }
// }