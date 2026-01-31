// Função que implementa o modo de segurança com alternância de cores
export async function securityMode(updateUI, timeManager){
    // Array com as cores que serão alternadas (amarelo e desligado)
    const colors = ["yellow", "off"];
    let currentIndex = 0;

    // Objeto que define o tempo de duração (em ms) para cada cor
    const timeout = {
        "yellow": 2000,  // Luz amarela por 2 segundos
        "off": 2000      // Luz desligada por 2 segundos
    };

    // Função que alterna as cores da luz de segurança
    function changeLight() {
        // Obtém a cor atual baseado no índice
        const currentColor = colors[currentIndex];
        console.log(`Sinal: ${currentColor}`);
        
        // Incrementa o índice e retorna ao início quando atinge o final
        currentIndex = (currentIndex + 1) % colors.length;

        // Atualiza a interface com a cor atual
        if (updateUI) updateUI(currentColor);
        
        // Agenda a próxima mudança de cor após o tempo definido
        timeManager.id = setTimeout(changeLight, timeout[currentColor]);
    }
    
    // Inicia o ciclo de alternância de cores
    changeLight();
}