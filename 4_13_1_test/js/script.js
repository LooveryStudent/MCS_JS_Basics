const bGetPopup = document.getElementsByClassName("request")[0];
const bClosePopup = document.getElementsByClassName("closePopup")[0];
const popup = document.getElementsByClassName("popup")[0];

bGetPopup.addEventListener("click", () => popup.classList.add("popup_active"));
bClosePopup.addEventListener("click", () => popup.classList.remove("popup_active"));


const bOpenMenu = document.getElementsByClassName("openMenu")[0];
const bCloseMenu = document.getElementsByClassName("closeMenu")[0];
const menu = document.getElementsByClassName("menu")[0];

bOpenMenu.addEventListener("click", () => menu.style.left = "0");
bCloseMenu.addEventListener("click", () => menu.style.left = "-50vw");