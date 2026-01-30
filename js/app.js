
import { localMode } from "./modules/localMode.js";
import { serverMode } from "./modules/serverMode.js";
import { securityMode } from "./modules/securityMode.js";
import { weather } from "./modules/weather.js";
import { flow } from "./modules/flow.js";


// CONFIG
// =================
let server = true; // Simulação de conexão
let sensor = true; // Simulação de sensor
// =================


// Elementos do DOM
const greenLight = document.getElementById('luz-verde');
const yellowLight = document.getElementById('luz-amarela');
const redLight = document.getElementById('luz-vermelha');

// const killServerButton = document.querySelector('[kill = "server"]');
// const killSensorButton = document.querySelector('[kill = "sensor"]');
const log = document.querySelector('[log="text"]');


// Função auxiliar para resetar todas as luzes para apagado (cinza)
function turnOffAll() {
    greenLight.classList.remove('luz-verde-ativa');
    
    yellowLight.classList.remove('luz-amarela-ativa');
    
    redLight.classList.remove('luz-vermelha-ativa');
}

function updateTrafficLightUI(color) {
    turnOffAll(); // Apaga tudo antes de acender o novo

    if (color === "green") {
        greenLight.classList.add('luz-verde-ativa');
    }
    else if (color === "yellow") {
        yellowLight.classList.add('luz-amarela-ativa');
    }
    else if (color === "red") {
        redLight.classList.add('luz-vermelha-ativa');
    }
    else if (color === "off") {}
}

// killServerButton.addEventListener('click', () => {
//     server = !server;
//     main();
// })
// killSensorButton.addEventListener('click', () => {
//     sensor = !sensor;
//     main();
// })


async function main() {
    try {
        const weatherData = await weather();
        const flowData = await flow();
        let weatherTxt;

        if (weatherData === "clear"){
            weatherTxt = "Ensolarado"
        }
        else if (weatherData === "light_rain"){
            weatherTxt = "Chuva fraca"
        }
        else if (weatherData === "strong_rain"){
            weatherTxt = "Chuva forte"
        } else {
            weatherTxt = "Erro fatal"
        }
        
        // Atualiza o painel de dados (Opcional, mas visualmente bom)
        if (sensor){
            document.getElementById('txt-fluxo').innerText = `${flowData} %`;
        } else {
            document.getElementById('txt-fluxo').innerText = 'OFF';
        }
        
        document.getElementById('txt-chuva').innerText = weatherTxt;

        if (server) {
            document.getElementById('status-conexao').innerText = "ONLINE";
            document.getElementById('status-conexao').classList.replace('offline', 'online');

            if (sensor) {
                // Passamos flow, weather E a função de atualizar a tela
                await serverMode(flowData, weatherData, updateTrafficLightUI);
                log.innerText = "SERVIDOR ONLINE: MODO NORMAL"
            }
            else {
                await securityMode(updateTrafficLightUI);
                log.innerText = "ERRO: NÃO FOI POSSÍVEL CONECTAR AO SENSOR"
            }
        } else {
            document.getElementById('status-conexao').innerText = "OFFLINE";
            await localMode(updateTrafficLightUI);
            log.innerText = "SERVIDOR OFFLINE"
        }

    } catch (error) {
        console.error('Error in main:', error);
    }
}

main();