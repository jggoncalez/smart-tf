import { localMode } from "./modules/localMode.js";
import { serverMode } from "./modules/serverMode.js";
import { securityMode } from "./modules/securityMode.js";
import { weather } from "./modules/weather.js";
import { flow } from "./modules/flow.js";


const server = true;
const sensor = true;

let currentColor = "off";

async function main() {

    const weatherData = await weather();
    const flowData = await flow();

        if (server) {
            if (sensor) {
                currentColor = await serverMode(flowData, weatherData);
            }
            else {
                currentColor = await securityMode();
            }

        } else {
            currentColor = await localMode();
        }

        console.log(`${currentColor} - ${flowData} - ${weatherData}`);
    }

main();