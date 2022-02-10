export default (function () {
  let fixedButtonCart = document.querySelector(".fixed-buttons-cart");
  let fixedButtonContent = fixedButtonCart.querySelector(
    ".fixed-buttons-cart-content"
  );
  let fixedButtonCartPaddingX = Number(
    getComputedStyle(fixedButtonCart).paddingRight.replace("px", "")
  );

  let style = document.createElement("style");
  style.innerHTML = `.fixed-buttons-cart{transform: translateX(${
    fixedButtonContent.offsetWidth + fixedButtonCartPaddingX
  }px)}`;

  document.head.appendChild(style);
})();
