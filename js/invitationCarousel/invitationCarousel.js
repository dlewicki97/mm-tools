export default (function () {
  let invitationCarousel = $(".invitation-carousel");
  invitationCarousel.owlCarousel({
    margin: 10,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      700: {
        items: 2,
      },
      1300: {
        items: 3,
      },
    },
    dots: false,
    nav: false,
  });

  document
    .querySelector(".invitation-carousel-arrow.left")
    .addEventListener("click", () => {
      invitationCarousel.trigger("prev.owl.carousel");
    });
  document
    .querySelector(".invitation-carousel-arrow.right")
    .addEventListener("click", () => {
      invitationCarousel.trigger("next.owl.carousel");
    });
})();
