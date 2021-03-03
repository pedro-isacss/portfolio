// === Global variables ===
let menuIsOpen = false;
let slidCount = 0;

// === Global Components
const menuBtn = document.getElementById("menu");
const controllsSlider = document.querySelectorAll(".controllers button");
const dog = document.getElementById("dog");

// === Open/Close Menu ===
menuBtn.addEventListener("click", () => {
  menuIsOpen = !menuIsOpen;
  const linksMenu = document.querySelectorAll("#nav a");
  const menuImg = document.getElementById("menu-img");
  const nav = document.getElementById("nav");
  if (menuIsOpen) {
    menuImg.src = "./images/close.svg";
    nav.style.height = "100vh";
    menuBtn.style.position = "fixed";
    menuBtn.style.right = "24px";
    linksMenu.forEach((link) => {
      link.style.display = "block";
    });
  } else {
    menuImg.src = "./images/menu.svg";
    nav.style.height = "0";
    menuBtn.style.position = "static";
    linksMenu.forEach((link) => {
      link.style.display = "none";
    });
  }
});

// === Slider ===
setInterval(() => {
  if (slidCount === 2) slidCount = 0;
  else slidCount += 1;
  controllsSlider.forEach((controll, index) => {
    if (index === slidCount) {
      controll.classList.add("active");
    } else controll.classList.remove("active");
    dog.src = `./images/dog${slidCount}.png`;
  });
}, 5000);
