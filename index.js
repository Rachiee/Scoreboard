let num1 = 12
let num2 = 5
document.getElementById("home-el").textContent = num1
document.getElementById("guest-el").textContent = num2

function homeElOne() {
    num1 = num1 + 1 
    document.getElementById("home-el").textContent = num1 
}

function homeElTwo() {
    num1 = num1 + 2 
    document.getElementById("home-el").textContent = num1 
}

function homeElThree() {
    num1 = num1 + 3 
    document.getElementById("home-el").textContent = num1 
}

function guestElOne() {
    num2 = num2 + 1 
    document.getElementById("guest-el").textContent = num2 
}

function guestElTwo() {
    num2 = num2 + 2 
    document.getElementById("guest-el").textContent = num2 
}

function guestElThree() {
    num2 = num2 + 3 
    document.getElementById("guest-el").textContent = num2 
}