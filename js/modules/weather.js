
function weather() {
    weatherArr = ["light_rain", "clear", "strong rain"]

    return weatherArr[Math.floor(Math.random() * weatherArr.length)];
}