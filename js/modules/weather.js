export async function weather() {
    // Array com os tipos de clima disponíveis
    const weatherArr = ["light_rain", "clear", "strong_rain"]

    // Retorna um clima aleatório do array
    return weatherArr[Math.floor(Math.random() * weatherArr.length)];
}