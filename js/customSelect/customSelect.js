import customSelectEvents from "../events/customSelectEvents.js";

export default (function () {
  let customSelects = document.querySelectorAll(".custom-select");
  let customSelectOnchangeEvent = customSelectEvents.customSelectChange;

  for (let i = 0; i < customSelects.length; i++) {
    let input = customSelects[i].querySelector(".custom-select-input");
    let placeholderSection = customSelects[i].querySelector(
      ".custom-select-placeholder-section"
    );
    let placeholder = customSelects[i].querySelector(
      ".custom-select-placeholder"
    );
    let optionsContainer = customSelects[i].querySelector(
      ".custom-select-options"
    );
    let options = customSelects[i].querySelectorAll(".custom-select-option");
    let optionContainerHeight = optionsContainer.offsetHeight + 16;
    optionsContainer.style.height = `0px`;

    customSelects[i].addEventListener("click", (e) => {
      e.stopPropagation();
      customSelects[i].classList.toggle("active");
      optionsContainer.style.height = `${
        customSelects[i].classList.contains("active")
          ? optionContainerHeight
          : 0
      }px`;
    });

    for (let j = 0; j < options.length; j++) {
      options[j].addEventListener("click", (e) => {
        e.stopPropagation();
        placeholder.innerHTML = options[j].innerHTML;
        input.value = options[j].dataset.value;
        input.dispatchEvent(customSelectEvents.customSelectChange);
        customSelects[i].classList.remove("active");
        optionsContainer.style.height = `0px`;
      });
    }
  }

  document.addEventListener("click", () => {
    for (let i = 0; i < customSelects.length; i++) {
      customSelects[i].classList.remove("active");
      customSelects[i].querySelector(
        `.custom-select-options`
      ).style.height = `0px`;
    }
  });
})();
