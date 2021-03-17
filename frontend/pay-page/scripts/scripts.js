let menuIsOpen = false;

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("links-nav-container");

menuBtn.addEventListener("click", function () {
  menuIsOpen = !menuIsOpen;
  if (menuIsOpen) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});
