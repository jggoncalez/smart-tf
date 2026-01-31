
// Função que simula um semáforo em modo local
// Parâmetros:
// - updateUI: função callback para atualizar a interface com a cor atual
// - timeManager: objeto que armazena o ID do timeout para controle posterior

export async function localMode(updateUI, timeManager) {
    // Define as cores do semáforo em sequência
    const colors = ["green", "yellow", "red"];
    
    // Índice que controla qual cor está ativa
    let currentIndex = 0;

    // Tempo (em ms) que cada cor permanece ativa
    const timeout = {
        "green": 5000,   // Verde: 5 segundos
        "yellow": 2000,  // Amarelo: 2 segundos
        "red": 5000      // Vermelho: 5 segundos
    };

    // Função que muda a cor do semáforo
    function changeLight() {
        // Obtém a cor atual baseado no índice
        const currentColor = colors[currentIndex];
        console.log(`Sinal Local: ${currentColor}`);
        
        // Atualiza a interface com a nova cor, se a função foi fornecida
        if (updateUI) updateUI(currentColor);

        // Avança para a próxima cor (volta ao início após vermelho)
        currentIndex = (currentIndex + 1) % colors.length;
        
        // Agenda a próxima mudança de cor com base no tempo da cor atual
        timeManager.id = setTimeout(changeLight, timeout[currentColor]);
    }
    
    // Inicia o semáforo chamando a primeira mudança
    changeLight();
}