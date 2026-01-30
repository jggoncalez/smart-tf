export async function securityMode(updateUI){
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
        
        setTimeout(changeLight, timeout[currentColor]);

        return currentColor;
    }
    changeLight();
}