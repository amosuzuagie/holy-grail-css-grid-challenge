function toggleNav() {
  const mainGrid = document.querySelector(".main-grid");
  mainGrid.classList.toggle("main-grid-extended");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
