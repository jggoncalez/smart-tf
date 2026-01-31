// Função assíncrona que gerencia o modo servidor de controle de tráfego
export async function serverMode(flow, weather, updateUI, timeManager) {
    // Array com as cores do semáforo em ordem de ciclo
    const colors = ["green", "yellow", "red"];
    
    // Modificadores de tempo baseados em condições externas
    let greenModifier = 1;
    let yellowModifier = 1;
    let currentIndex = 0;

    // Aumenta o tempo do sinal verde se o fluxo de veículos for alto
    if (flow > 75) {
        greenModifier = 2.5;
    }
    
    // Aumenta o tempo do sinal amarelo em caso de chuva forte
    if (weather === "strong_rain"){
        yellowModifier = 3;
    }

    // Define o tempo de duração de cada cor do semáforo (em ms)
    const timeout = {
        "green": 5000 * greenModifier,
        "yellow": 2000 * yellowModifier,
        "red": 5000
    };

    // Função recursiva que alterna as cores do semáforo
    function changeLight() {
        // Obtém a cor atual baseado no índice
        const currentColor = colors[currentIndex];
        console.log(`Sinal Servidor: ${currentColor}`);
        
        // Atualiza a interface do usuário com a cor atual
        if (updateUI) updateUI(currentColor);
        
        // Move para a próxima cor no ciclo
        currentIndex = (currentIndex + 1) % colors.length;
        
        // Agenda a próxima mudança de cor conforme o timeout da cor atual
        timeManager.id = setTimeout(changeLight, timeout[currentColor]);
    }
    
    // Inicia o ciclo do semáforo
    changeLight();
}