/*
    fluxo alto -> aumentar tempo do verde
    chuva forte -> reduzir velocidade e aumentar tempo do amarelo
    sensor falhar -> acionar modo segurança
    servidor cair -> rodar local
*/


export async function serverMode(flow, weather){
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
        "green": 3000 * greenModifier,
        "yellow": 1000 * yellowModifier,
        "red": 3000
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