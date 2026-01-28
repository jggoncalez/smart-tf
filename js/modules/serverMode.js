/*
    fluxo alto -> aumentar tempo do verde
    chuva forte -> reduzir velocidade e aumentar tempo do amarelo
    sensor falhar -> acionar modo segurança
    servidor cair -> rodar local
*/


export function serverMode(flow, weather, sensor){
    if (!sensor)
}