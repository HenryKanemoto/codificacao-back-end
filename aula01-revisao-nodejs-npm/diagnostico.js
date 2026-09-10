const os = require('os');
console.log('=== DIGNÓSTICO DO SERVIDOR ===\n');

//! Captura informações do computador
const plataforma = os.platform();
const memoriaTotal = (os.totalmem() /(1024 ** 3)).toFixed(2);
const memoriaLivre = (os.freemem() /(1024 ** 3)).toFixed(2);
const cpus = os.cpus();

//! Mostra informações do computador
console.log(`Arquitetura OS: ${plataforma}`);
console.log(`Memória Total: ${memoriaTotal} GB`);
console.log(`Memória Disponível: ${memoriaLivre} GB`);
console.log(`Processador: ${cpus[0].model}`);
console.log(`Núcleos do Processador: ${cpus.length}`);

