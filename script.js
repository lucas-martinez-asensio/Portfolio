const menu = document.querySelector(".nav_button-container");
const openMenuButton = document.querySelector(".open-menu");
const closeMenuButton = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);

const aboutMeBtn = document.querySelector(".about-me");
const skillsBtn = document.querySelector(".skills");
const reposBtn = document.querySelector(".repos");
const socialBtn = document.querySelector(".social");

aboutMeBtn.addEventListener("click", toggleMenu);
skillsBtn.addEventListener("click", toggleMenu);
reposBtn.addEventListener("click", toggleMenu);
socialBtn.addEventListener("click", toggleMenu);
