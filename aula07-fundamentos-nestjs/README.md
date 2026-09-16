# NestJS Server Check 🚀

Projeto básico em [NestJS](https://nestjs.com/) desenvolvido para testar a execução e o status de funcionamento do servidor local.

---

## 🛠️ Pré-requisitos

Antes de iniciar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

---

## ⚙️ Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd nome-do-projeto
```

2. Instale as dependências:
```bash
npm install
```

---

## 🚀 Executando a Aplicação

### Modo Desenvolvimento
Inicia o servidor e reinicia automaticamente a cada alteração no código:
```bash
npm run start:dev
```

### Modo Padrão
```bash
npm run start
```

### Modo Produção
```bash
npm run start:prod
```

Após iniciar, o servidor estará rodando por padrão na porta **3000**.  
Acesse no navegador ou API Client: `http://localhost:3000/`

---

## 🧪 Executando os Testes

Para validar se as rotas e os controllers estão respondendo corretamente:

```bash
# Testes unitários
npm run test

# Testes de integração (e2e)
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

---

## 📂 Estrutura Principal

* `src/main.ts` - Ponto de entrada da aplicação que inicializa o NestJS.
* `src/app.module.ts` - Módulo raiz da aplicação.
* `src/app.controller.ts` - Controller básico responsável por receber as requisições.
* `src/app.service.ts` - Serviço simples com a lógica da resposta padrão.
* `src/app.controller.spec.ts` - Teste unitário do controller principal.V