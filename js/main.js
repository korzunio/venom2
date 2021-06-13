const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuCLoseButton = document.querySelector(".menu-close");

menuButton.addEventListener("click", () => {
    menu.classList.add("is-active");
    menuCLoseButton.classList.add("is-active");
});
menuCLoseButton.addEventListener("click", () => {
    menu.classList.remove("is-active");
    menuCLoseButton.classList.remove("is-active");
});