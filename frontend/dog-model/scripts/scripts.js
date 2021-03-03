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
  const menuImg = document.getElementById("menu-img");
  const nav = document.getElementById("nav");
  if (menuIsOpen) {
    menuImg.src = "./images/close.svg";
    nav.style.display = "flex";
  } else {
    menuImg.src = "./images/menu.svg";
    nav.style.display = "none";
  }
});

// === Slider ===
setInterval(() => {
  if (slidCount === 2) slidCount = 0;
  else slidCount += 1;
  controllsSlider.forEach((controll, index) => {
    if (index === slidCount) {
      controll.classList.add("active");
      dog.style.display = "block";
      dog.src = "./images/dog1.png";
    } else controll.classList.remove("active");
  });
}, 5000);
