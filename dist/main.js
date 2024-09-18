const navMenu = document.getElementById("nav-menu"); // Corrected variable name
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]"); // Corrected variable name
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]"); // Corrected variable name
    hamburger.classList.toggle("ri-close-large-line");
  });
});

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
