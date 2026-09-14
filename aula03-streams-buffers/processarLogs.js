import fs from 'fs';
import readLine from 'readline';

async function filtrarErros() {
    const streamLeitura = fs.createReadStream('servidor.log');
    const streamEscrita = fs.createWriteStream('apenas_erros.log');
    const leitorLinhaLinha = readLine.createInterface({input: streamLeitura, crlfDelay: Infinity});
    
    let totalErros = 0;
    for await (const linha of leitorLinhaLinha) {
        
        if (linha.includes('ERROR')){
            streamEscrita.write(linha + '\n');
            totalErros++;
        }
    }
}

export function exibirConsumoMemoria(consumo) {

    const memoria = process.memoryUsage();
    const rssMB = (memoria.rss / 1024 / 1024).toFixed(2);
    const heapMB = (memoria.heapUsed / 1024 / 1024).toFixed(2);

    console.log(`[${consumo}] RSS: [${rssMB}] MB | Heap Utilizado: [${heapMB}] MB`);
    
}
console.log('Inciando processamento...');

exibirConsumoMemoria('INICIO');
filtrarErros();
exibirConsumoMemoria('FIM');
console.log('Processamento Concluído');
