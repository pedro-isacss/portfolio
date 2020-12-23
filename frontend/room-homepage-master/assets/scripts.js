let sliderCount = 1;
let menuIsOpen = false;

const nextSlideBtn = document.getElementById("next");
const backSlideBtn = document.getElementById("back");
const menuBtn = document.getElementById("menuBtn");

function slideController(n) {
  const navSection = document.querySelector("section.nav-section");
  const titleSlide = document.getElementById("title-slide");
  const textSlide = document.getElementById("text-slide");
  if (sliderCount + n === 1) {
    navSection.style.backgroundImage = "url(images/desktop-image-hero-1.jpg)";
    titleSlide.innerHTML = "Discover innovative ways to decorate";
    textSlide.innerHTML = `We provide unmatched quality, comfort, and style for property owners across the country.
      Our experts combine form and function in bringing your vision to life. Create a room in your
      own style with our collection and make your property a reflection of you and what you love.`;
  } else if (sliderCount + n === 2) {
    navSection.style.backgroundImage = "url(images/desktop-image-hero-2.jpg)";
    titleSlide.innerHTML = "We are available all across the globe";
    textSlide.innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business.
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
    store locator. Any questions? Don't hesitate to contact us today.`;
  } else if (sliderCount + n === 3) {
    navSection.style.backgroundImage = "url(images/desktop-image-hero-3.jpg)";
    titleSlide.innerHTML = "Manufactured with the best materials";
    textSlide.innerHTML = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
    to ensure that every product is made as perfect and as consistent as possible. With three decades of
    experience in this industry, we understand what customers want for their home and office.`;
  }
  sliderCount = sliderCount + n;
}

function menuController() {
  const menuImg = document.getElementById("menuImg");
  const menuItems = document.getElementsByClassName("menu-item");
  const logo = document.getElementById("logo");
  const nav = document.getElementById("nav");
  menuIsOpen = !menuIsOpen;
  if (menuIsOpen) {
    menuImg.src = "images/icon-close.svg";
    logo.style.display = "none";
    Array.prototype.forEach.call(menuItems, (item) => {
      item.style.display = "block";
    });
    nav.style.background = "white";
  } else {
    menuImg.src = "images/icon-hamburger.svg";
    logo.style.display = "block";
    Array.prototype.forEach.call(menuItems, (item) => {
      item.style.display = "none";
    });
    nav.style.background = "transparent";
  }
}

nextSlideBtn.addEventListener("click", () => {
  if (sliderCount + 1 > 3) {
    sliderCount = 1;
    slideController(0);
  } else {
    slideController(1);
  }
});

backSlideBtn.addEventListener("click", () => {
  if (sliderCount - 1 < 1) {
    sliderCount = 3;
    slideController(0);
  } else {
    slideController(-1);
  }
});

menuBtn.addEventListener("click", () => menuController());
