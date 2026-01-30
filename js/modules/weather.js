export async function weather() {
    const weatherArr = ["light_rain", "clear", "strong_rain"]
    
    setTimeout(() => flow(), 20000);
    return weatherArr[Math.floor(Math.random() * weatherArr.length)];
}