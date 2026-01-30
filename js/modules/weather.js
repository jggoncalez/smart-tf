export async function weather() {
    // Gera clima de forma aleatória
    const weatherArr = ["light_rain", "clear", "strong_rain"]

    return weatherArr[Math.floor(Math.random() * weatherArr.length)];
}