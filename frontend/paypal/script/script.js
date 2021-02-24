const menuBtn = document.getElementById("menu");
const linkMenu = document.querySelectorAll("#nav a");
let isMenuOpen = false;

menuBtn.addEventListener("click", function () {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    linkMenu.forEach((link) => {
      link.style.display = "flex";
      link.style.marginLeft = "24px";
    });
  } else {
    linkMenu.forEach((link) => {
      link.style.display = "none";
    });
  }
});
