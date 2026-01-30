export async function flow() {
    
    setTimeout(flow(), 10000);
    return Math.floor(Math.random() * 100);
}