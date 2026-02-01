// Importação dos módulos de controle de tráfego
import { localMode } from "./modules/localMode.js";
import { serverMode } from "./modules/serverMode.js";
import { securityMode } from "./modules/securityMode.js";
import { weather } from "./modules/weather.js";
import { flow } from "./modules/flow.js";

// ============================================
// CONFIGURAÇÃO - Simulações de ambiente
// ============================================
let server = true; // Simulação de conexão com servidor
let sensor = true; // Simulação de sensor de fluxo

// ============================================
// SELETORES DO DOM - Referências aos elementos HTML
// ============================================
const greenLight = document.getElementById('luz-verde');
const yellowLight = document.getElementById('luz-amarela');
const redLight = document.getElementById('luz-vermelha');
const log = document.querySelector('[log="text"]');
const killServerButton = document.querySelector('[kill="server"]');
const killSensorButton = document.querySelector('[kill="sensor"]');

// ============================================
// GERENCIADOR DE TIMER - Controla timeouts globais
// ============================================
let currentTimer = {
    id: null,
    stop() {
        if (this.id !== null){
            clearTimeout(this.id);
            this.id = null;
            console.log("Timer stopped")
        }
    }
}

// ============================================
// FUNÇÕES DE CONTROLE DA SEMÁFORO
// ============================================

// Apaga todas as luzes (reseta para cinza)
function turnOffAll() {
    greenLight.classList.remove('luz-verde-ativa');
    yellowLight.classList.remove('luz-amarela-ativa');
    redLight.classList.remove('luz-vermelha-ativa');
}

// Atualiza a cor do semáforo na interface
// Parâmetros: color ("green", "yellow", "red", "off")
function updateTrafficLightUI(color) {
    turnOffAll(); // Apaga tudo antes de acender a nova luz

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

// ============================================
// FUNÇÃO PRINCIPAL - Orquestra o sistema
// ============================================
async function main() {
    try {
        // Para timer anterior antes de iniciar nova sequência
        currentTimer.stop();

        // Busca dados de clima e fluxo de tráfego
        const weatherData = await weather();
        const flowData = await flow();
        let weatherTxt;

        // Converte código de clima para texto legível
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
        
        // Atualiza painel com dados do sensor ou exibe "OFF"
        if (sensor){
            document.getElementById('txt-fluxo').innerText = `${flowData} %`;
        } else {
            document.getElementById('txt-fluxo').innerText = 'OFF';
        }
        
        // Atualiza condição climática na interface
        document.getElementById('txt-chuva').innerText = weatherTxt;

        // Define modo de operação baseado na disponibilidade de servidor e sensor
        if (server) {
            document.getElementById('status-conexao').innerText = "ONLINE";
            document.getElementById('status-conexao').classList.replace('offline', 'online');

            if (sensor) {
                // Servidor online + Sensor online = Modo normal inteligente
                log.innerText = "SERVIDOR ONLINE: MODO NORMAL"
                await serverMode(flowData, weatherData, updateTrafficLightUI, currentTimer);
            }
            else {
                // Servidor online + Sensor offline = Modo segurança
                log.innerText = "ERRO: NÃO FOI POSSÍVEL CONECTAR AO SENSOR"
                await securityMode(updateTrafficLightUI, currentTimer);
            }
        } else {
            // Servidor offline = Modo local
            document.getElementById('status-conexao').innerText = "OFFLINE";
            document.getElementById('status-conexao').classList.replace('online', 'offline');
            log.innerText = "SERVIDOR OFFLINE"
            await localMode(updateTrafficLightUI, currentTimer);
        }

    } catch (error) {
        console.error('Error in main: ', error);
    }
}

// ============================================
// EVENT LISTENERS - Controle de simulação
// ============================================

// Toggle para simular desconexão do servidor
killServerButton.addEventListener('click', () => {
    server = !server;
    console.log(`Servidor ${server ? 'LIGADO' : 'DESLIGADO'}`);
    main();
});

// Toggle para simular falha do sensor
killSensorButton.addEventListener('click', () => {
    sensor = !sensor;
    console.log(`Sensor ${sensor ? 'LIGADO' : 'DESLIGADO'}`);
    main();
});

// Limpeza ao descarregar a página
window.addEventListener('beforeunload', () => {
    currentTimer.stop();
    console.log("Current Time Out");
});

// Inicia o sistema
main();