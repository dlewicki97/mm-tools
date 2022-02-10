export default (function () {
  let listingSubcategories = document.querySelectorAll(
    ".listing-subcategories"
  );

  for (let i = 0; i < listingSubcategories.length; i++) {
    let listingSubcategory = listingSubcategories[i].querySelector(
      ".listing-subcategory"
    );
    let arrow = listingSubcategory.querySelector(".listing-category-arrow");

    arrow?.addEventListener("click", () => {
      listingSubcategory.classList.toggle("active");
    });
  }
})();
