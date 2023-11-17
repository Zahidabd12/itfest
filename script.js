document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const navlinks = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", function () {
    if (window.scrollY > navbar.offsetHeight) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
    // Tandai navlink yang aktif berdasarkan posisi scroll
    let fromTop = window.scrollY;

    navlinks.forEach(function (link) {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop - 250 <= fromTop &&
        section.offsetTop - 250 + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
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
  const dokters = document.querySelectorAll(".dokter-card");
  const layanan = document.querySelector(".layanan-desc");
  const layananText = document.querySelector(".layanan-text");
  const layananImage = document.querySelector('.layanan-image');
  const doktitle = document.querySelector(".dokter-desc");
  const windowHeight = window.innerHeight;

  animatedObjects.forEach((animatedObject) => {
    const objectPosition = animatedObject.getBoundingClientRect().top;
    const layananPosition = layanan.getBoundingClientRect().top;
    const layananTextPosition = layananText.getBoundingClientRect().top;
    const layananImagePosition = layananImage.getBoundingClientRect().top;

    layananImage.classList.toggle("aos", layananPosition < windowHeight * 0.75);
    layananText.classList.toggle("aos", layananPosition < windowHeight * 0.75);
    layanan.classList.toggle("aos", layananPosition < windowHeight * 0.75);
    animatedObject.style.opacity = objectPosition < windowHeight * 0.75 ? 1 : 0;
  });

  dokters.forEach((dokter) => {
    const dokterPosition = dokter.getBoundingClientRect().top;
    const doktitlePosition = doktitle.getBoundingClientRect().top;

    dokter.style.opacity = dokterPosition < windowHeight * 0.75 ? 1 : 0;
    doktitle.classList.toggle("aos", doktitlePosition < windowHeight * 0.75);
  });
}

// Call the function when the scroll event occurs
window.addEventListener("scroll", handleScroll);

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
    waveDua.setAttribute("fill", "#232946");
    mode.innerHTML = "🌤️";
    logos.forEach((logo) => (logo.src = "img/logo-dark.png"));
  } else {
    waveSatu.setAttribute("fill", "#fffffe");
    waveDua.setAttribute("fill", "#D8EEFD");
    mode.innerHTML = "🌙";
    logos.forEach((logo) => (logo.src = "img/logo.png"));
  }
});
