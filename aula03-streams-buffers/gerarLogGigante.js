import fs from 'fs';

const dataAtual = new Date().toISOString().split('T')[0];
const streamEscrita = fs.createWriteStream(`servidor.log`);
console.log('Gerando arquivo de log simulado');

for(let i = 0; i < 4e5; i++) {
    const tipo = i % 7 === 0 ? 'ERROR' : 'INFO';
    streamEscrita.write(`[${dataAtual}] Line ${i}: status 200 - <Mensagem de teste ${tipo}>\n`);
}
console.log("Arquivo de log gerado");
