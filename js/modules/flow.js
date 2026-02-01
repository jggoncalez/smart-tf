/**
 * Simula o fluxo de veículos em uma via
 * @returns {Promise<number>} Um valor aleatório entre 0 e 100 representando o fluxo de veículos
 */

export async function flow() {
    // Gera um valor aleatório de 0 a 100, para medir (de forma simulada) o fluxo de veículos
    // 0 = sem veículos, 100 = fluxo máximo
    return Math.floor(Math.random() * 100);
}