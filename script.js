const layanan = document.getElementById("layanan");
const navbar = document.querySelector("nav");
const active = document.getElementsByClassName("nav-item")[0];
const yPos = layanan.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY >= yPos - 200) {
    active.classList.add("active");
  }
  if (window.scrollY > 5) {
    navbar.classList.add("nav-scrolled");
  } else {
    active.classList.remove("active");
    navbar.classList.remove("nav-scrolled");
  }
});

const overlayNav = document.getElementsByClassName("overlay-nav")[0];
const button = document.getElementsByClassName("nav-toggle")[0];
const bar = document.querySelectorAll(".bar");
let isToggled = false;

button.addEventListener("click", function () {
  isToggled = !isToggled; // Toggle the state

  if (isToggled) {
    overlayNav.classList.add("muncul");
    bar.classList.add("clicked");
  } else {
    overlayNav.classList.remove("muncul");
    bar.classList.remove("clicked");
  }
});
