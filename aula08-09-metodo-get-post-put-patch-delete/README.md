<p align="center"> <img src="https://nestjs.com/img/logo-small.svg" width="100" alt="NestJS Logo" /> </p> <h1 align="center">API de Gerenciamento de Convidados</h1> <p align="center"> API REST desenvolvida com NestJS e TypeScript para gerenciamento de convidados. </p> <p align="center"> <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" /> <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white" alt="NestJS" /> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" /> <img src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white" alt="Jest" /> </p>
📌 Sobre o projeto

Esta aplicação consiste em uma API REST para gerenciamento de convidados, desenvolvida utilizando NestJS e TypeScript.

O projeto foi estruturado seguindo a arquitetura modular do NestJS, separando responsabilidades entre controllers, services e o módulo principal da aplicação.

Além dos testes automatizados com Jest, os endpoints foram validados manualmente utilizando Insomnia e Postman.

Objetivos

Criar uma API REST utilizando NestJS;

Aplicar uma estrutura organizada e modular;

Implementar operações relacionadas ao gerenciamento de convidados;

Testar os componentes da aplicação;

Validar as requisições HTTP e suas respectivas respostas.

🧰 Tecnologias utilizadas
Tecnologia	Utilização
Node.js	Ambiente de execução
NestJS	Framework backend
TypeScript	Linguagem de programação
Jest	Testes automatizados
Insomnia	Testes e validação da API
Postman	Testes e validação da API
🏗️ Estrutura do projeto

A aplicação segue uma estrutura baseada nos principais componentes do NestJS:

src/
│
├── app.controller.spec.ts
│   └── Testes do controller principal
│
├── app.controller.ts
│   └── Controller principal da aplicação
│
├── app.module.ts
│   └── Módulo raiz da aplicação
│
├── app.service.ts
│   └── Serviço principal da aplicação
│
├── convidados.controller.ts
│   └── Endpoints relacionados aos convidados
│
├── convidados.service.ts
│   └── Regras e operações relacionadas aos convidados
│
└── main.ts
    └── Inicialização da aplicação

Organização das responsabilidades

Controller

Responsável por receber as requisições HTTP e direcioná-las para os serviços correspondentes.

Service

Responsável pela lógica da aplicação e pelas operações relacionadas aos convidados.

Module

Responsável por organizar e conectar os componentes da aplicação.

Main

É o ponto de entrada da aplicação, responsável por inicializar o servidor NestJS.

⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

Node.js

npm

Para verificar as versões instaladas:

node --version
npm --version

🚀 Instalação
1. Clone o repositório
git clone <URL_DO_SEU_REPOSITORIO>

2. Entre no diretório do projeto
cd <NOME_DO_PROJETO>

3. Instale as dependências
npm install


Após a instalação, o projeto estará pronto para ser executado.

▶️ Executando a aplicação

O NestJS disponibiliza diferentes formas de execução da aplicação.

Desenvolvimento

Utilize o modo watch durante o desenvolvimento:

npm run start:dev


Esse modo reinicia automaticamente a aplicação sempre que alterações forem detectadas nos arquivos do projeto.

Execução normal
npm run start

Produção
npm run start:prod


Após iniciar a aplicação, a API estará disponível, por padrão, em:

http://localhost:3000


A porta utilizada pode ser alterada de acordo com a configuração presente no arquivo main.ts.

🔌 API

A principal funcionalidade da aplicação está relacionada ao gerenciamento de convidados.

Os endpoints são implementados no arquivo:

src/convidados.controller.ts

Operações disponíveis

A estrutura da API contempla operações HTTP relacionadas aos convidados:

Método	Endpoint	Descrição
GET	/convidados	Lista os convidados
GET	/convidados/:id	Busca um convidado específico
POST	/convidados	Cadastra um novo convidado
PUT	/convidados/:id	Atualiza um convidado
DELETE	/convidados/:id	Remove um convidado

Os endpoints acima devem ser ajustados caso a implementação atual do projeto utilize rotas diferentes.

🧪 Testes

O projeto utiliza Jest para a execução dos testes automatizados.

Testes unitários

Para executar os testes:

npm run test

Testes em modo de observação

Durante o desenvolvimento, é possível utilizar:

npm run test:watch

Cobertura de testes

Para gerar o relatório de cobertura:

npm run test:cov

🔎 Validação dos endpoints

Além dos testes automatizados, a API foi validada manualmente utilizando ferramentas de teste de APIs.

Insomnia

O Insomnia foi utilizado durante o desenvolvimento para realizar requisições HTTP e verificar o comportamento dos endpoints.

Foram realizadas validações relacionadas a:

Métodos HTTP;

URLs dos endpoints;

Dados enviados nas requisições;

Códigos de status HTTP;

Corpo das respostas;

Comportamento das operações de convidados.

Postman

O Postman também foi utilizado para testar os endpoints e validar as respostas da API.

Os testes permitiram verificar o fluxo das requisições e confirmar o retorno dos dados esperados.

📋 Fluxo básico de utilização

O funcionamento da API segue o fluxo:

Cliente HTTP
     │
     ▼
Controller
     │
     ▼
Service
     │
     ▼
Regra de negócio
     │
     ▼
Resposta HTTP


Ferramentas como Insomnia e Postman atuam como clientes HTTP para enviar requisições à API e analisar as respostas retornadas.

📁 Arquivos principais
Arquivo	Responsabilidade
main.ts	Inicialização da aplicação
app.module.ts	Configuração do módulo principal
app.controller.ts	Controller principal
app.service.ts	Serviço principal
convidados.controller.ts	Rotas de convidados
convidados.service.ts	Lógica relacionada aos convidados
app.controller.spec.ts	Testes do controller
📦 Scripts disponíveis

Os principais scripts utilizados no projeto são:

# Iniciar a aplicação
npm run start

# Iniciar em modo de desenvolvimento
npm run start:dev

# Iniciar em produção
npm run start:prod

# Executar testes
npm run test

# Executar testes em modo watch
npm run test:watch

# Gerar cobertura de testes
npm run test:cov

📄 Licença

Este projeto está disponível sob a licença MIT.

Consulte o arquivo LICENSE para obter os detalhes da licença.

👨‍💻 Desenvolvimento

Projeto desenvolvido como uma aplicação backend utilizando NestJS, com foco no desenvolvimento de uma API REST para gerenciamento de convidados.