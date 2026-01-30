
export async function serverMode(flow, weather, updateUI) { // Recebe updateUI
    const colors = ["green", "yellow", "red"];
    let greenModifier = 1;
    let yellowModifier = 1;
    let currentIndex = 0;

    if (flow > 75) {
        greenModifier = 2.5;
    }
    if (weather == "strong_rain"){
        yellowModifier = 3;
    }

    const timeout = {
        "green": 5000 * greenModifier,
        "yellow": 2000 * yellowModifier,
        "red": 5000
    };

    function changeLight() {
        const currentColor = colors[currentIndex];
        console.log(`Sinal Servidor: ${currentColor}`);
        
        // Atualiza a tela
        if (updateUI) updateUI(currentColor);
        
        currentIndex = (currentIndex + 1) % colors.length;
        
        setTimeout(changeLight, timeout[currentColor]);
    }
    changeLight();
}