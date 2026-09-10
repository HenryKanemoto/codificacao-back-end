# 🖥️ Diagnóstico do Servidor (Node.js - Módulo OS)

Este repositório contém um script em **Node.js** desenvolvido para coletar e exibir informações essenciais do sistema operacional e do hardware do servidor/computador.

---

## 📌 O que foi feito nesta aula?

Nesta aula, aprendemos a utilizar o módulo nativo do Node.js chamado `os` (**Operating System**) para interagir diretamente com o sistema operacional sem a necessidade de instalar dependências externas.

### 🎯 Principais Conceitos Aplicados:
1. **Importação de Módulos Nativos:**
   - Utilização do `require('os')` para carregar as funções do sistema operacional.

2. **Coleta de Métricas do Hardware e Sistema:**
   - **Plataforma/Arquitetura:** `os.platform()` — Identifica o sistema operacional em execução (ex: `win32`, `linux`, `darwin`).
   - **Memória RAM:**
     - `os.totalmem()` — Retorna a quantidade total de memória RAM em bytes.
     - `os.freemem()` — Retorna a quantidade de memória RAM disponível/livre em bytes.
   - **Processador (CPU):**
     - `os.cpus()` — Retorna um array com detalhes de cada núcleo do processador (modelo, velocidade, etc.).

3. **Tratamento e Formatação de Dados:**
   - **Conversão de Bytes para Gigabytes:** Divisão dos valores por `1024 ** 3` ($1024^3$) para converter bytes em GB.
   - **Arredondamento:** Uso do método `.toFixed(2)` para limitar a exibição a 2 casas decimais.
   - **Template Literals:** Formatação amigável das saídas no console usando interpolação de strings (`${...}`).

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Ter o [Node.js](https://nodejs.org/) instalado na máquina.

### Passo a Passo
1. Clone ou baixe este repositório.
2. Abra o terminal na pasta do projeto.
3. Execute o script com o comando:
   ```bash
   node index.js