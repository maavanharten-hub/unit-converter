/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
let lengthText = document.getElementById("length-text")
let volumeText = document.getElementById("volume-text")
let massText = document.getElementById("mass-text")
let inputNumber = document.getElementById("input-number")


convertBtn.addEventListener("click", function convert() {
    let feet = (inputNumber.value * 3.281).toFixed(3)
    let meter = (inputNumber.value / 3.281).toFixed(3)
    let liter = (inputNumber.value / 0.264).toFixed(3)
    let gallon = (inputNumber.value * 0.264).toFixed(3)
    let kilogram = (inputNumber.value / 2.204).toFixed(3)
    let pound = (inputNumber.value * 2.204).toFixed(3)
    lengthText.innerHTML = ` ${inputNumber.value} meters is ${feet} feet | ${inputNumber.value} feet is ${meter} meters`
    volumeText.innerHTML = ` ${inputNumber.value} liters is ${gallon} gallons | ${inputNumber.value} gallons is ${liter} liters`
    massText.innerHTML = ` ${inputNumber.value} kilograms is ${pound} pounds | ${inputNumber.value} pounds is ${kilogram} kilograms`
})



    


