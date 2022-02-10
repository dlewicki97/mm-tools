export default (function () {
  var banksCarousel = $(".banks-carousel");
  banksCarousel.owlCarousel({
    margin: 20,
    loop: true,
    nav: false,
    dots: false,
    autoplaySpeed: 1000,
    autoplay: true,
    items: 1,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      500: {
        items: 2,
      },
      600: {
        items: 4,
      },
      700: {
        items: 5,
      },
      800: {
        items: 6,
      },
      900: {
        items: 7,
      },
      1000: {
        items: 8,
      },
      1100: {
        items: 9,
      },
      1200: {
        items: 10,
      },
      1300: {
        items: 11,
      },
      1400: {
        items: 12,
      },
      1500: {
        items: 13,
      },
      1600: {
        items: 14,
      },
    },
  });
})();
