const menu = document.querySelector(".menu"),
  menuOpen = document.querySelector(".menu-open"),
  menuClose = document.querySelector(".menu-close");

menuOpen.addEventListener("click", () => {
  menu.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("active");
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
