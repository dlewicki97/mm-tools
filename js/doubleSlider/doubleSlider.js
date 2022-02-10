import nouislider from "./nouislider.js";
import wnumb from "./wNumb.js";

export default (function () {
  let inputMin = document.getElementById("price-range-min");
  let inputMax = document.getElementById("price-range-max");

  let minValue = parseInt(inputMin?.getAttribute("min-price"));
  let start = 0;
  let max = parseInt(inputMax?.getAttribute("max-price"));
  let slider = document.getElementById("price-slider");
  // prettier-ignore
  let priceSortCookie = JSON.parse(document.cookie.split("; ").find((el) => el.includes("priceSort"))?.replace("priceSort=", "") || false);
  let maxRange = 0;
  if (priceSortCookie) {
    minValue = +priceSortCookie[0];
    maxRange = +priceSortCookie[1];
  }

  noUiSlider.create(slider, {
    start: [minValue, maxRange || max],
    connect: true,
    range: {
      min: start,
      max: max,
    },
    step: 1,
    format: wNumb({
      decimals: 0,
    }),
    ariaFormat: wNumb({
      decimals: 0,
      suffix: "",
    }),
  });

  slider.noUiSlider.on("update", function (values, handle) {
    handle === 0
      ? (inputMin.value = values[handle])
      : (inputMax.value = values[handle]);
  });

  inputMin.addEventListener("change", function () {
    slider.noUiSlider.setHandle(0, inputMin.value);
  });

  inputMax.addEventListener("change", function () {
    slider.noUiSlider.setHandle(1, inputMax.value);
  });
})();
