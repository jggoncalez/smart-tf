export async function localMode() {
    const colors = ["green", "yellow", "red"];
    let currentIndex = 0;

    const timeout = {
        "green": 5000,
        "yellow": 2000,
        "red": 5000
    };

    function changeLight() {
        const currentColor = colors[currentIndex];
        console.log(`Sinal: ${currentColor}`);
        
        currentIndex = (currentIndex + 1) % colors.length;
        
        setTimeout(changeLight, timeout[currentColor]);

        return currentColor;
    }
    changeLight();
}
