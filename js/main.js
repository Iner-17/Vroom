// navigation variables
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
// filter [checkboxes] variables
const sportsCarCheckBox = document.getElementById("sportsCar");
const allCheckBox = document.getElementById("all");
const carsCheckBox = document.getElementById("cars");
const suvCheckBox = document.getElementById("suv");
// lists of cars variables
const sportsCar = document.querySelectorAll('.sports-car');
const cars = document.querySelectorAll('.car');
const suv = document.querySelectorAll('.suv');

function displayVehicles() {
    cars.forEach(car => car.style.display = "none");
    sportsCar.forEach(sportcar => sportcar.style.display = "none");
    suv.forEach(suv => suv.style.display = "none");

    if (allCheckBox.checked) {
        cars.forEach(car => car.style.display = "block");
        sportsCar.forEach(sportcar => sportcar.style.display = "block");
        suv.forEach(suv => suv.style.display = "block");
        return;
    }

    if (carsCheckBox.checked) {
        cars.forEach(car => car.style.display = "block");
    }
    if (sportsCarCheckBox.checked) {
        sportsCar.forEach(sportcar => sportcar.style.display = "block");
    }
    if (suvCheckBox.checked) {
        suv.forEach(suv => suv.style.display = "block");
    }
}

function showMenu() {
    if(navLinks.classList.contains('active')) {
        navLinks.classList.remove('active')
            if (window.innerWidth < 840) {
            navLinks.style.display = "none"
            }
    } else {
        navLinks.style.display = "flex"
        navLinks.classList.add('active')
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth >= 840) {
        navLinks.classList.remove('active')
        navLinks.style.display = "flex"
    } else {
        navLinks.style.display = "none"
    }
})

function removeAllCheckBox() {
    const check = document.getElementsByClassName("check");
    let counter = 0;
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            counter++
        }
    }

    if (counter == 1) {
        allCheckBox.checked = false;
    } else if (counter > 1) {
        allCheckBox.checked = false
    } else {
        allCheckBox.checked = true
    }
}

allCheckBox.addEventListener('click', () => {
    sportsCarCheckBox.checked = false
    carsCheckBox.checked = false
    suvCheckBox.checked = false
})

sportsCarCheckBox.addEventListener('change', displayVehicles);
carsCheckBox.addEventListener('change', displayVehicles);
suvCheckBox.addEventListener('change', displayVehicles);
allCheckBox.addEventListener('change', displayVehicles);

window.onload = function() {
    allCheckBox.checked = true; 
    displayVehicles();
};