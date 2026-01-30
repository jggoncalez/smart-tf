// js/modules/localMode.js
export async function localMode(updateUI) { // 1. Recebe a função de atualizar tela
    const colors = ["green", "yellow", "red"];
    let currentIndex = 0;

    const timeout = {
        "green": 5000,
        "yellow": 2000,
        "red": 5000
    };

    function changeLight() {
        const currentColor = colors[currentIndex];
        console.log(`Sinal Local: ${currentColor}`);
        
        // 2. Chama a função que atualiza o HTML
        if (updateUI) updateUI(currentColor);

        currentIndex = (currentIndex + 1) % colors.length;
        
        setTimeout(changeLight, timeout[currentColor]);
    }
    
    changeLight(); // Inicia o loop
}