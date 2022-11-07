var autoPlayVideo = document.querySelectorAll(".loading");
autoPlayVideo.forEach(element => {
        element.oncanplaythrough = function() {
            element.muted = true;
            element.play();
            element.pause();
            element.play();
        } 
});
