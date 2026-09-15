# Servidor HTTP Sentinela

Este projeto implementa um servidor HTTP nativo em Node.js (utilizando o módulo `http` sem bibliotecas externas), responsável por monitorar requisições e fornecer um endpoint de verificação de status com cabeçalhos de segurança pré-configurados.

---

## 📁 Estrutura do Arquivo

* `servidor.js` — Script principal que cria o servidor HTTP, registra os logs de requisição, aplica cabeçalhos de segurança HTTP (`X-Content-Type-Options` e `X-Frame-Options`) e faz o roteamento dos endpoints disponíveis.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** (módulo nativo `http` com suporte a ES Modules)

---

## 📋 Endpoints da API

| Método | Rota | Descrição | Resposta de Sucesso |
| :--- | :--- | :--- | :--- |
| `GET` | `/status` | Retorna o status de funcionamento do servidor | `200 OK` → `{"servidor": "Online"}` |
| *Qualquer* | *Qualquer outra* | Retorna erro para rotas não encontradas | `404 Not Found` → `{"erro": "Página não encontrada"}` |

---

## 🔒 Cabeçalhos de Segurança (Security Headers)

Todas as respostas HTTP enviadas pelo servidor incluem:
* `X-Content-Type-Options: nosniff` — Impede que navegadores tentem adivinhar (sniffing) o tipo de conteúdo MIME.
* `X-Frame-Options: DENY` — Protege a aplicação contra ataques de Clickjacking, impedindo o carregamento em `<iframe>`.

---

## 🚀 Como Executar

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado (versão 14+ recomendado).

### Passo a Passo

1. Execute o arquivo diretamente com o Node.js:
   ```bash
   node servidor.js
   ```

2. O console exibirá a mensagem de confirmação:
   ```text
   Sentinela ativo na porta 3000
   ```

---

## 🧪 Como Testar

Com o servidor rodando na porta 3000, você pode testá-lo pelo terminal ou pelo navegador:

* **Verificar Status (`/status`):**
  ```bash
  curl http://localhost:3000/status
  # Retorno: {"servidor":"Online"}
  ```

* **Testar Rota Inexistente (`/outra-rota`):**
  ```bash
  curl http://localhost:3000/outra-rota
  # Retorno: {"erro":"Página não encontrada"}
  ```