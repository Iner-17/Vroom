const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

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

const sportsCarCheckBox = document.getElementById("sportsCar");
const allCheckBox = document.getElementById("all");
const carsCheckBox = document.getElementById("cars");
const suvCheckBox = document.getElementById("suv");

const sportsCar = document.querySelectorAll('.sports-car');
const cars = document.querySelectorAll('.car');
const suv = document.querySelectorAll('.suv');


function displayVehicles() {
    // Reset display for all vehicles
    cars.forEach(car => car.style.display = "none");
    sportsCar.forEach(sportcar => sportcar.style.display = "none");
    suv.forEach(suv => suv.style.display = "none");

    // If All checkbox is checked, show all vehicles
    if (allCheckBox.checked) {
        cars.forEach(car => car.style.display = "block");
        sportsCar.forEach(sportcar => sportcar.style.display = "block");
        suv.forEach(suv => suv.style.display = "block");
        return;
    }

    // Update display based on individual checkboxes
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

// Add event listeners to checkboxes
sportsCarCheckBox.addEventListener('change', displayVehicles);
carsCheckBox.addEventListener('change', displayVehicles);
suvCheckBox.addEventListener('change', displayVehicles);
allCheckBox.addEventListener('change', displayVehicles);

// Initially display all vehicles
window.onload = function() {
    allCheckBox.checked = true; // Set the "All" checkbox as checked by default
    displayVehicles();
};