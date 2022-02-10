export default (function () {
  let listingCategories = document.querySelectorAll(".listing-category");

  for (let i = 0; i < listingCategories.length; i++) {
    let arrow = listingCategories[i].querySelector(
      ".listing-category-wrapper .listing-category-arrow"
    );

    arrow.addEventListener("click", () => {
      listingCategories[i].classList.toggle("active");
    });
  }
})();
