# Serviço de Configuração e Inicialização

Este projeto é uma aplicação Node.js para validação e inicialização das configurações de ambiente da aplicação, responsável por verificar e exibir o status de variáveis essenciais como porta do servidor, conexão com banco de dados e chave da API de pagamento.

---

## 📁 Estrutura do Projeto

* `app.js` — Ponto de entrada do código em Node.js. Carrega as variáveis de ambiente utilizando o pacote `dotenv`, valida as credenciais necessárias e inicializa o serviço.
* `.env.example` — Arquivo de modelo/exemplo indicando as variáveis de ambiente necessárias para a aplicação rodar corretamente.
* `.gitignore` — Define quais arquivos e diretórios devem ser ignorados pelo Git (ex: `node_modules/`, `.env`, arquivos de log).

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** (JavaScript ES Modules)
* **dotenv** — Biblioteca para carregamento de variáveis de ambiente a partir de um arquivo `.env`

---

## 📋 Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 14 ou superior com suporte a ES Modules)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## ⚙️ Configuração e Instalação

1. **Instale as dependências:**
   ```bash
   npm install dotenv
   ```

2. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto com base nas variáveis necessárias:

   ```env
   PORT=3000
   API_KEY_PAGAMENTO=sua_chave_api_aqui
   DATABASE_URL=mongodb://localhost:27017/my_database
   ```

   > ⚠️ **Atenção:** Nunca envie o arquivo `.env` para o repositório Git! O repositório já conta com um arquivo `.gitignore` configurado para ignorá-lo.

---

## 🚀 Como Executar

Após configurar o arquivo `.env` e instalar as dependências, execute a aplicação com o comando:

```bash
node app.js
```

### 💡 Saída Esperada no Console

Caso as variáveis estejam configuradas corretamente, você verá uma saída similar a:

```text
=== SERVIÇO DE CONFIGURAÇÃO CARREGADO ===
Servidor rodando na porta: 3000
Conexão com banco de dados: mongodb://localhost:27017/my_database
Status da API de pagamento: chave de tamanho 27 autenticada.
```

Se a variável `API_KEY_PAGAMENTO` não for fornecida, o sistema exibirá uma mensagem de erro crítico e encerrará o processo imediatamente:

```text
ERRO CRÍTICO: A chave API_KEY_PAGAMENTO não está definida nas variáveis de ambiente
```