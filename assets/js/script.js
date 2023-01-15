const btnMenu = document.querySelector(".bx-menu");
const containerMenu = document.querySelector(".navbar-nav-menu");

btnMenu.addEventListener("click", toggleMenu);

function toggleMenu () {
    containerMenu.classList.toggle("d-none");
}