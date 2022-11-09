const int = document.querySelectorAll(".interaction");
const target = document.querySelectorAll(".target-filter");
const text = document.querySelectorAll(".height-text");
const description = document.querySelector("#title p");
int.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        // element.classList.add("grey-filter")
        text.forEach((element) => {
            element.classList.add("grey-filter")
        });
        target.forEach((element) => {
            console.log(element);
            element.classList.add("grey-filter")
        });
    });
    element.addEventListener("mouseleave", () => {
        text.forEach((element) => {
            element.classList.remove("grey-filter");
        });
        target.forEach((element) => {
            element.classList.remove("grey-filter")

        });
    });
})
