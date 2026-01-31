export async function securityMode(updateUI, timeManager){
    // Modo sem sensor
    const colors = ["yellow", "off"];
    let currentIndex = 0;

    const timeout = {
        "yellow": 2000,
        "off": 2000
    };

    function changeLight() {
        const currentColor = colors[currentIndex];
        console.log(`Sinal: ${currentColor}`);
        
        currentIndex = (currentIndex + 1) % colors.length;

        if (updateUI) updateUI(currentColor);
        
        timeManager.id = setTimeout(changeLight, timeout[currentColor]);
    }
    changeLight();
}