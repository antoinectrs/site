const slider = document.querySelector("[data-slider]");
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");

function slide(direction) {
    console.log("inside");
  let left;
  const { scrollLeft, clientWidth } = slider;

  switch (direction) {
    case "prev":
      left = scrollLeft - clientWidth;
      break;
    case "next":
    default:
      left = scrollLeft + clientWidth;
      break;
  }

  slider.scroll({
    left,
    behavior: "smooth"
  });
}

if (slider && prevButton && nextButton) {
  prevButton.addEventListener("click", () => slide("prev"));
  nextButton.addEventListener("click", () => slide("next"));
}
