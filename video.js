var autoPlayVideo = document.querySelectorAll(".loading");
console.log(autoPlayVideo);
autoPlayVideo.forEach(element => {
        element.oncanplaythrough = function() {
            element.muted = true;
            element.play();
            element.pause();
            element.play();
        } 
});
