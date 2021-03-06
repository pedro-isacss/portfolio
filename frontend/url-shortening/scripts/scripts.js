// === MENU ===
let menuIsOpen = false;
const menu = document.getElementById("menu");
const linksMenu = document.querySelector(".links");

menu.addEventListener("click", () => {
  menuIsOpen = !menuIsOpen;
  if (menuIsOpen) {
    linksMenu.style.display = "flex";
  } else linksMenu.style.display = "none";
});
