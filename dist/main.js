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
