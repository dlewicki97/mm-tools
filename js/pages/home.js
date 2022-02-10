import layout from "../layout/layout.js";
import invitationCarousel from "../invitationCarousel/invitationCarousel.js";
import banksCarousel from "../banksCarousel/banksCarousel.js";

var sliderCarousel = $(".slider-carousel");
sliderCarousel.owlCarousel({
  loop: true,
  lazyLoad: true,
  items: 1,
  dots: false,
  nav: true,
  navText: [
    "<img class='slider-arrow' src='img/home/slider-arrow-left.svg'>",
    "<img class='slider-arrow' src='img/home/slider-arrow-right.svg'>",
  ],
});
