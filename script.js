const layanan = document.getElementById("layanan");
const navbar = document.querySelector("nav");
const active = document.getElementsByClassName("nav-item")[0];
const yPos = layanan.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY >= yPos - 215) {
    navbar.classList.add("nav-scrolled");
    active.classList.add("active");
  } else if (window.scrollY > 100) {
    // navbar.classList.add("nav-hidden");
  } else {
    navbar.classList.remove("nav-hidden");
    navbar.classList.remove("nav-scrolled");
    active.classList.remove("active");
  }
});

const overlayNav = document.getElementsByClassName("overlay-nav")[0]; // Access the first element in the collection
const button = document.getElementsByClassName("nav-toggle")[0]; // Access the first element in the collection

let isToggled = false;

button.addEventListener("click", function () {
  isToggled = !isToggled; // Toggle the state

  if (isToggled) {
    overlayNav.classList.add("muncul"); // Add the "muncul" class to hide the element
  } else {
    overlayNav.classList.remove("muncul"); // Remove the "muncul" class to show the element
  }
});
