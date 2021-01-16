window.addEventListener("scroll", function () {
  const heightWindow = window.innerHeight;
  if (
    window.pageYOffset > heightWindow / 3 &&
    window.pageYOffset < heightWindow
  ) {
    const section = document.getElementById("section2");
    section.setAttribute("class", "animated know-more-container");
    section.style.opacity = 1;
  } else if (
    window.pageYOffset > (heightWindow * 2) / 3 &&
    window.pageYOffset < heightWindow * 2
  ) {
    const section = document.getElementById("section3");
    section.setAttribute(
      "class",
      "animated know-more-container bg-orange-light"
    );
    section.style.opacity = 1;
  } else if (
    window.pageYOffset > (heightWindow * 3) / 3 &&
    window.pageYOffset < heightWindow * 3
  ) {
    const section = document.getElementById("section4");
    section.setAttribute("class", "animated know-more-container");
    section.style.opacity = 1;
  } else if (
    window.pageYOffset > (heightWindow * 4) / 3 &&
    window.pageYOffset < heightWindow * 4
  ) {
    const section = document.getElementById("section5");
    section.setAttribute("class", "animated computer-phone-container");
    section.style.opacity = 1;
  } else if (
    window.pageYOffset > (heightWindow * 5) / 3 &&
    window.pageYOffset < heightWindow * 5
  ) {
    const section = document.getElementById("section6");
    section.setAttribute("class", "animated business-container");
    section.style.opacity = 1;
  } else if (
    window.pageYOffset > (heightWindow * 6) / 3 &&
    window.pageYOffset < heightWindow * 6
  ) {
    const section = document.getElementById("section7");
    section.setAttribute("class", "animated card-container bg-orange-light");
    section.style.opacity = 1;
  } else if (
    window.pageYOffset > (heightWindow * 7) / 3 &&
    window.pageYOffset < heightWindow * 7
  ) {
    const section = document.getElementById("section8");
    section.setAttribute("class", "animated");
    section.style.opacity = 1;
  }
});
