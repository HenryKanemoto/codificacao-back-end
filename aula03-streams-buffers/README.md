# Processamento de Logs de Grande Porte com Streams no Node.js

Este projeto consiste em um sistema assíncrono para geração, leitura e filtragem de arquivos de logs de grande porte em arquivo de texto, utilizando **Node.js**, a interface **ReadLine** e a sintaxe moderna de **ES Modules (`import/export`)**.

---

## 📁 Estrutura do Projeto

```text
.
├── package.json           # Configurações do projeto e definição de ES Modules
├── gerarLogGigante.js     # Script para criação do arquivo de log simulado
├── processarLogs.js       # Script para leitura, filtragem e monitoramento de memória
├── servidor.log           # Arquivo gerado contendo todos os logs simulados
└── apenas_erros.log       # Arquivo filtrado contendo apenas os registros de erro
```

---

## 🛠️ Descrição dos Arquivos

### `package.json`
* **Nome do Projeto:** `aula03-streams-buffers`
* **Tipo:** Configurado com `"type": "module"`, permitindo o uso nativo de **ES Modules** (`import` / `export`) no Node.js.

### `gerarLogGigante.js`
Script responsável pela geração contínua de dados de teste de forma otimizada.
* **`fs.createWriteStream`**: Cria uma stream de escrita para gravação progressiva em disco.
* **Geração de Dados**: Gera 400.000 linhas de log no arquivo `servidor.log`, alternando iterativamente o tipo de registro entre `INFO` e `ERROR`.

### `processarLogs.js`
Arquivo responsável pela leitura assíncrona, filtragem e monitoramento de recursos do sistema.
* **`filtrarErros()`**:
  * Utiliza `fs.createReadStream` para ler o arquivo `servidor.log` sem carregar todo o conteúdo na memória.
  * Emprega `readLine.createInterface` com o iterador `for await...of` para ler o arquivo linha por linha.
  * Filtra apenas as linhas contendo a tag `ERROR` e as grava em `apenas_erros.log` via `fs.createWriteStream`.
* **`exibirConsumoMemoria(consumo)`**:
  * Utiliza `process.memoryUsage()` para monitorar o uso do **RSS** (*Resident Set Size*) e do **Heap Utilizado** em Megabytes (MB) no início e ao fim do processamento.

---

## 🚀 Como Executar

### Pré-requisitos
* **Node.js** instalado (versão 14 ou superior recomendada).

### Passo a Passo

1. Abra o terminal na pasta raiz do projeto.
2. Gere o arquivo de log simulado executando o comando:

```bash
node gerarLogGigante.js
```

Você verá as seguintes mensagens no terminal:
```text
Gerando arquivo de log simulado
Arquivo de log gerado
```

3. Execute o script para processar e filtrar os logs de erro:

```bash
node processarLogs.js
```

4. Após a execução, a saída do terminal exibirá as métricas de consumo de memória:
```text
Inciando processamento...
[INICIO] RSS: [XX.XX] MB | Heap Utilizado: [X.XX] MB
[FIM] RSS: [XX.XX] MB | Heap Utilizado: [X.XX] MB
Processamento Concluído
```

5. O arquivo `apenas_erros.log` será gerado na pasta raiz contendo apenas as linhas do tipo `ERROR`.