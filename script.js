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
  isToggled = !isToggled;

  overlayNav.classList.toggle("muncul", isToggled);
  bar.classList.toggle("clicked", isToggled);
  barDua.classList.toggle("clicked", isToggled);
  barTiga.classList.toggle("clicked", isToggled);
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
      layanan.classList.add("aos");
    } else {
      layanan.classList.remove("aos");
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

window.onscroll = function () {
  updateProgressBar();
};

function updateProgressBar() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || document.body.clientHeight;

  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = scrollPercentage + "%";
}

const mode = document.querySelector(".mode");
const logos = document.querySelectorAll("#logo-besar");
const waveSatu = document.getElementById("wave-satu");
const waveDua = document.getElementById("wave-dua");

mode.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    waveSatu.setAttribute("fill", "#0f0e17");
    waveDua.setAttribute("fill", "#f25f4c");
    mode.innerHTML = "🌤️";
    logos.forEach((logo) => (logo.src = "img/logo-dark.png"));
  } else {
    waveSatu.setAttribute("fill", "#fffffe");
    waveDua.setAttribute("fill", "#D8EEFD");
    mode.innerHTML = "🌙";
    logos.forEach((logo) => (logo.src = "img/logo.png"));
  }
});
