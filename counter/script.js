var number = 0;
let numSpan = document.querySelector("#num");

document.addEventListener('click', function(event) {
    if (event.target.matches('#minus')) {
        number--;
    }
    if (event.target.matches('#plus')) {
        number++;
    }
    if (event.target.matches('#reset')) {
        number = 0;
    }
    numSpan.innerHTML = number;
    setColor();
}, false);

function setColor() {
    if (number < 0) {
        numSpan.classList = "negative";

    } else if (number > 0) {
        numSpan.classList = "positive";

    } else {
        numSpan.classList = "neutral";

    }
}