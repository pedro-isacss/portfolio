// Section animation
const heightWindow = window.innerHeight;
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");
const section6 = document.getElementById("section6");
const section7 = document.getElementById("section7");
const section8 = document.getElementById("section8");
const sections = [
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
];
window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    if (
      section.offsetTop + heightWindow / 2 >= window.pageYOffset &&
      section.offsetTop + heightWindow / 2 <= window.pageYOffset + heightWindow
    ) {
      section.classList.add("animated");
      section.style.opacity = 1;
    } else {
      section.classList.remove("animated");
      section.style.opacity = 0;
    }
  });
});

// Menu
let isOpen = false;
const menu = document.getElementById("menu");
const menuImg = document.getElementById("menu-img");
const nav = document.getElementById("nav");
menu.addEventListener("click", function () {
  isOpen = !isOpen;
  if (isOpen) {
    nav.style.display = "flex";
    menuImg.src = "./images/close.png";
  } else {
    nav.style.display = "none";
    menuImg.src = "./images/menu.png";
  }
});
