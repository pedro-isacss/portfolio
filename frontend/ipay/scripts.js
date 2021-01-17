const heightWindow = window.innerHeight;
let position = 0;
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
    if (window.pageYOffset > position && section !== section1) {
      if (
        section.offsetTop >= window.pageYOffset &&
        section.offsetTop <= window.pageYOffset + heightWindow
      ) {
        section.classList.add("animated");
      } else {
        section.classList.remove("animated");
      }
      console.log("Down");
    } else if (window.pageYOffset <= position && section !== section8) {
      if (
        section.offsetTop + heightWindow >= window.pageYOffset &&
        section.offsetTop + heightWindow <= window.pageYOffset + heightWindow
      ) {
        section.classList.add("animated-up");
      } else {
        section.classList.remove("animated-up");
      }
      console.log("Up");
    }
  });
  position = window.pageYOffset;
});
