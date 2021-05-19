function chooseColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("color").innerHTML = "<h1>#" + randomColor + "</h1>";
    document.body.style.backgroundColor = "#" + randomColor;
}

document.getElementById("genNew").onclick = () => {
    chooseColor();
};