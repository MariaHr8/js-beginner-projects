//get video
var video = document.querySelector("#myVideo");

//get button
var btn = document.querySelector("#check");

btn.onclick = () => {
    if (!video.paused) {
        video.pause();
    } else {
        video.play();
    }
};