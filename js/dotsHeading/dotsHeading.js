export default (function () {
  let dotsHeadings = document.querySelectorAll(".dots-heading");

  for (let i = 0; i < dotsHeadings.length; i++) {
    let h2 = dotsHeadings[i].querySelector("h2");
    if (h2.innerHTML.trim().split(" ").length < 2) continue;
    h2.style.whiteSpace = "nowrap";
    let h2Width = Number(getComputedStyle(h2).width.replace("px", ""));
    h2.style.whiteSpace = "";
    h2.style.width = `${h2Width * 2}px`;
  }
})();
