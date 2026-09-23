# 📁 Módulo de Mídia (Media Module)

Este projeto conta com um serviço centralizado para gerenciamento, upload, download e exclusão de arquivos de mídia (como imagens, vídeos e documentos). O módulo foi desenvolvido com uma arquitetura modular utilizando o framework **NestJS**.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** com **TypeScript**
- **NestJS** (Framework backend)
- **Multer** (Middleware para tratamento de `multipart/form-data`)
- **RxJS / Observables** (Para manipulação assíncrona de dados)

---

## ⚙️ Funcionalidades

- 📤 **Upload de Arquivos:** Suporte a upload único e em lote (*multiple files*).
- 📥 **Download e Visualização:** Streaming direto de mídias armazenadas.
- 🗑️ **Exclusão de Arquivos:** Remoção segura de arquivos do sistema ou storage.
- 🔎 **Listagem e Consulta:** Busca de metadados e informações de mídias por ID.

---

## 📦 Estrutura do Módulo

O módulo de mídias é composto por duas estruturas principais:

1. `midia.module.ts`: Declaração do módulo responsável por encapsular os controllers, providers e configurar middlewares de armazenamento (ex: `MulterModule`).
2. `midia.controller.ts`: Responsável pelas rotas HTTP da aplicação. Mapeia as requisições de mídia recebidas e as delega para a camada de serviço (`MidiaService`).

---

## 🛣️ Endpoints da API

### Mídias (`/midia`)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **POST** | `/midia/upload` | Envia um ou mais arquivos de mídia para a aplicação. |
| **GET** | `/midia` | Retorna a lista de todas as mídias cadastradas. |
| **GET** | `/midia/:id` | Retorna os detalhes/metadados de uma mídia específica. |
| **GET** | `/midia/file/:filename` | Faz o streaming/download do arquivo físico de mídia. |
| **DELETE** | `/midia/:id` | Remove o registro e o arquivo correspondente do sistema. |

---

## 🛠️ Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente (`.env`):
   ```env
   PORT=3000
   UPLOAD_LOCATION=./uploads
   MAX_FILE_SIZE=10485760 # 10MB
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run start:dev
   ```

A API estará rodando em `http://localhost:3000`.