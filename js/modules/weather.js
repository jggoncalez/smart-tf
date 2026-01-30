export async function weather() {
    const weatherArr = ["light_rain", "clear", "strong_rain"]

    return weatherArr[Math.floor(Math.random() * weatherArr.length)];
}