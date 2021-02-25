gsap.registerPlugin(ScrollTrigger);
const menuBtn = document.getElementById("menu");
const linkMenu = document.querySelectorAll("#nav a");
const nav = document.getElementById("nav");
let isMenuOpen = false;

menuBtn.addEventListener("click", function () {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    linkMenu.forEach((link) => {
      link.style.display = "flex";
      link.style.marginLeft = "24px";
      nav.style.height = "100vh";
      menuBtn.style.position = "absolute";
      menuBtn.style.top = "12px";
      menuBtn.style.left = "0px";
      nav.style.alignItems = "center";
    });
  } else {
    linkMenu.forEach((link) => {
      link.style.display = "none";
      nav.style.height = "auto";
      menuBtn.style.position = "static";
      nav.style.alignItems = "flex-start";
    });
  }
});

gsap.from("header", {
  scrollTrigger: "header",
  x: -500,
  opacity: 0,
  duration: 3,
});

gsap.from(".for-you", {
  scrollTrigger: ".for-you",
  y: 500,
  opacity: 0,
  duration: 3,
});

gsap.from(".create-account", {
  scrollTrigger: ".create-account",
  opacity: 0,
  duration: 3,
});

gsap.from(".create-account input", {
  scrollTrigger: ".create-account input",
  opacity: 0,
  scale: 0.6,
  duration: 3,
});

gsap.from(".app", {
  scrollTrigger: ".app",
  opacity: 0,
  duration: 3,
});

gsap.from(".app img", {
  scrollTrigger: ".app img",
  opacity: 0,
  scale: 0.5,
  duration: 3,
});

gsap.from(".for-your-business-container", {
  scrollTrigger: ".for-your-business-container",
  opacity: 0,
  duration: 3,
  y: 300,
});

gsap.from("footer", {
  scrollTrigger: "footer",
  opacity: 0,
  duration: 3,
});
