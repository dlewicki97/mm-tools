export default (function () {
  let navbarCollapse = document.querySelector(".navbar-collapse");
  let navbarButton = document.querySelector(".navbar-button");

  navbarButton.addEventListener("click", () => {
    navbarCollapse.classList.toggle("show");
  });
})();
