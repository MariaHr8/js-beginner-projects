window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".navbar").style.top = "20px";
    } else {
        document.querySelector(".navbar").style.top = "-50px";
    }
}