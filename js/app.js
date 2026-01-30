// js/app.js
import { localMode } from "./modules/localMode.js";
import { serverMode } from "./modules/serverMode.js";
import { securityMode } from "./modules/securityMode.js";
import { weather } from "./modules/weather.js";
import { flow } from "./modules/flow.js";

const server = true; // Simulação de conexão
const sensor = true; // Simulação de sensor

// Elementos do DOM
const greenLight = document.getElementById('luz-verde');
const yellowLight = document.getElementById('luz-amarela');
const redLight = document.getElementById('luz-vermelha');

// Função auxiliar para resetar todas as luzes para apagado (cinza)
function turnOffAll() {
    greenLight.classList.remove('luz-verde-ativa');
    
    yellowLight.classList.remove('luz-amarela-ativa');
    
    redLight.classList.remove('luz-vermelha-ativa');
}

// Essa é a função CALLBACK que passaremos para os módulos
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
    else if (color === "off") {/*nn tem nada motta */}
}

async function main() {
    try {
        const weatherData = await weather();
        const flowData = await flow();
        
        // Atualiza o painel de dados (Opcional, mas visualmente bom)
        document.getElementById('txt-fluxo').innerText = `${flowData} v/min`;
        document.getElementById('txt-chuva').innerText = weatherData;

        console.log(`Iniciando: Clima=${weatherData}, Fluxo=${flowData}`);

        if (server) {
            document.getElementById('status-conexao').innerText = "ONLINE";
            document.getElementById('status-conexao').classList.replace('offline', 'online');

            if (sensor) {
                // Passamos flow, weather E a função de atualizar a tela
                await serverMode(flowData, weatherData, updateTrafficLightUI);
            }
            else {
                await securityMode(updateTrafficLightUI);
            }
        } else {
            document.getElementById('status-conexao').innerText = "OFFLINE (MODO LOCAL)";
            await localMode(updateTrafficLightUI);
        }

    } catch (error) {
        console.error('Error in main:', error);
    }
}

main();