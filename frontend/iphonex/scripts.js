let menuIsOpen = false;
const menuBtn = document.querySelector("button#menu-btn");

menuBtn.addEventListener("click", function () {
  menuIsOpen = !menuIsOpen;
  const nav = document.querySelector("div.header-nav-links");
  if (menuIsOpen) nav.style.display = "flex";
  else nav.style.display = "none";
});
