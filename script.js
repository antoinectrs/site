const slider = document.querySelectorAll("[data-slider]");
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");

function slide(direction) {
  slider.forEach(element => {
    let left;
    const { scrollLeft, clientWidth } = element;
  
    switch (direction) {
      case "prev":
        left = scrollLeft - clientWidth;
        break;
      case "next":
      default:
        left = scrollLeft + clientWidth;
        break;
    }
  
    element.scroll({
      left,
      behavior: "smooth"
    });
  });

}

if (slider && prevButton && nextButton) {
  prevButton.addEventListener("click", () => slide("prev"));
  nextButton.addEventListener("click", () => slide("next"));
}
