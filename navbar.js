const right_slide = document.getElementById("right-slide");
const left_slide = document.getElementById("left-slide");
right_slide.addEventListener("mouseenter", (event) => {
    right_slide.src="/content/icons/right-blue.png"
})
right_slide.addEventListener("mouseleave", (event) => {
    right_slide.src="/content/icons/right.png"
})
left_slide.addEventListener("mouseenter", (event) => {
    left_slide.src="/content/icons/left-blue.png"
})
left_slide.addEventListener("mouseleave", (event) => {
    left_slide.src="/content/icons/left.png"
})