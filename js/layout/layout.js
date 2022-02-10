import lazyload from "../lazyload/lazyload.js";
import navbarButton from "../navbarButton/navbarButton.js";
import fixedButtonCart from "../fixedButtonCart/fixedButtonCart.js";

var categoriesCarousel = $(".categories-carousel");
categoriesCarousel.owlCarousel({
  margin: 20,
  loop: true,
  items: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    300: {
      items: 1,
    },
    400: {
      items: 2,
    },
    500: {
      items: 3,
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
  },
});

export default {};
