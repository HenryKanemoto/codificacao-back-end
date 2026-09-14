# Tratamento Global de Exceções no Node.js (ES Modules)

Este projeto consiste em uma API desenvolvida com **Express** demonstrando estratégias para resiliência e tratamento global de erros no **Node.js**, utilizando a sintaxe moderna de **ES Modules (`import/export`)**.

---

## 📁 Estrutura do Projeto

```text
.
├── package.json        # Configurações do projeto e dependências
├── package-lock.json   # Mapeamento exato de versões das dependências instaladas
└── server.js           # Servidor Express com tratamento global de exceções e eventos de processo
```

---

## 🛠️ Descrição dos Arquivos

### `package.json`
* **Nome do Projeto:** `aula04-tatamento-global-excecoes`
* **Tipo:** Configurado com `"type": "module"`, permitindo o uso nativo do **ES Modules** (`import` / `export`).
* **Dependências:**
  * `express` (`^5.2.1`): Framework minimalista para gerenciamento de rotas e servidores HTTP.

### `server.js`
Script principal da aplicação focado na captura e centralização de erros.
* **Capturadores de Erro de Processo:**
  * `uncaughtException`: Captura erros síncronos não tratados na aplicação para evitar que o processo quebre inesperadamente.
  * `unhandledRejection`: Captura Promises rejeitadas que não possuem bloco `.catch()` ou `try/catch`.
* **Rotas de Teste:**
  * `GET /sucesso`: Retorna uma resposta JSON confirmando o sucesso da requisição.
  * `GET /erro-sincrono`: Simula um erro síncrono de regra de negócio repassado ao manipulador central via `next(erro)`.
  * `GET /erro-assincrono`: Simula uma rejeição de Promise assíncrona tratada com `try/catch` e enviada ao middleware de erro.
* **Middleware Global de Erro:**
  * Intercepta qualquer erro enviado via `next(err)`.
  * Imprime a pilha de erros (`err.stack`) no console.
  * Formata e envia uma resposta de erro padronizada em formato JSON com o código de status HTTP (padrão `500`).

---

## 🚀 Como Executar

### Pré-requisitos
* **Node.js** instalado (versão 18 ou superior recomendada).

### Passo a Passo

1. Abra o terminal na pasta raiz do projeto.
2. Instale as dependências executando:

```bash
npm install
```

3. Inicie o servidor executando:

```bash
node server.js
```

4. Você verá as mensagens no terminal indicando que o servidor está rodando:
```text
Servidor Imortal rodando na porta 3000
Teste 1: localhost:3000/sucesso
Teste 2: localhost:3000/erro-sincriono
Teste 3: localhost:3000/erro-assincrono
```

5. Teste os cenários de erro e sucesso acessando os endpoints indicados através do navegador ou de um cliente HTTP (como Postman/Insomnia).