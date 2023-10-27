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
const bar = document.querySelector(".bar");
const barDua = document.querySelector(".bar.dua");
const barTiga = document.querySelector(".bar.tiga");
let isToggled = false;

button.addEventListener("click", function () {
  isToggled = !isToggled; // Toggle the state

  if (isToggled) {
    overlayNav.classList.add("muncul");
    bar.classList.add("clicked");
    barDua.classList.add("clicked");
    barTiga.classList.add("clicked");
  } else {
    overlayNav.classList.remove("muncul");
    bar.classList.remove("clicked");
    barDua.classList.remove("clicked");
    barTiga.classList.remove("clicked");
  }
});

// JavaScript
function handleScroll() {
  const animatedObjects = document.querySelectorAll(".card");
  const layanan = document.getElementsByClassName("layanan-desc")[0];
  const windowHeight = window.innerHeight;

  animatedObjects.forEach((animatedObject) => {
    const objectPosition = animatedObject.getBoundingClientRect().top;
    const layananPosition = layanan.getBoundingClientRect().top;
    if (layananPosition < windowHeight * 0.75) {
      layanan.classList.add('aos');
    } else {
      layanan.classList.remove('aos');
    }
    if (objectPosition < windowHeight * 0.75) {
      animatedObject.style.opacity = 1;
    } else {
      animatedObject.style.opacity = 0;
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();
