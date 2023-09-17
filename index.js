const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const percentageIndicator = document.querySelector(".percentage-indicator");

    percentageIndicator.textContent = slider.value + "%";
});

