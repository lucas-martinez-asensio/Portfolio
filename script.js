const menu = document.querySelector(".nav_button-container");
const openMenuButton = document.querySelector(".open-menu");
const closeMenuButton = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);
