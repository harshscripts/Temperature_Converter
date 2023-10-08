let celciusInput = document.querySelector('#celcius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

let btn = document.querySelector('.button button')

function roundNumber(number) {
    return Math.round(number*100)/100;
}

celciusInput.addEventListener('input', function(){
    let celciusTemp = parseFloat(celciusInput.value)
    let fahrenheitTemp = (celciusTemp*(9/5))+32
    let kelvinTemp = celciusTemp + 273.15

    fahrenheitInput.value = roundNumber(fahrenheitTemp)
    kelvinInput.value = roundNumber(kelvinTemp)
})

fahrenheitInput.addEventListener('input' , function() {
    let fahrenheitTemp = parseFloat(fahrenheitInput.value)
    let celciusTemp = (fahrenheitTemp - 32) * (5/9)
    let kelvinTemp = (fahrenheitTemp - 32) * (5/9) + 273.15

    celciusInput.value = roundNumber(celciusTemp)
    kelvinInput.value = roundNumber(kelvinTemp)
})

kelvinInput.addEventListener('input' , function() {
    let kelvinTemp = parseFloat(kelvinInput.value)
    let celciusTemp = kelvinTemp - 273.15
    let fahrenheitTemp = (kelvinTemp - 273.15) * (9/5) + 32

    celciusInput.value = roundNumber(celciusTemp)
    fahrenheitInput.value = roundNumber(fahrenheitTemp)
})

btn.addEventListener('click' , ()=> {
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})