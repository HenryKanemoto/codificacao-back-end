# Sistema de Registro de Logs em Node.js (ES Modules)

Este projeto consiste em um sistema assíncrono para formatação e gravação de logs de sistema em arquivo de texto, utilizando **Node.js** e a sintaxe moderna de **ES Modules (`import/export`)**.

---

## 📁 Estrutura do Projeto

```text
.
├── package.json   # Configurações do projeto e definição do tipo de módulo
├── utils.js       # Função utilitária para formatação de data e hora do log
├── index.js       # Script principal de manipulação de arquivos e gravação de logs
└── logs/          # Diretório criado automaticamente para armazenar os logs
    └── system.log # Arquivo onde os registros são salvos
```

---

## 🛠️ Descrição dos Arquivos

### `package.json`
* **Nome do Projeto:** `aula02-modulos-commonjs.esm`
* **Tipo:** Configurado com `"type": "module"`, permitindo o uso nativo do **ES Modules** (`import` / `export`) no Node.js.
* **Autor:** Henry Kanemoto

### `utils.js`
Contém funções utilitárias do sistema.
* **`formatLog(mensagem)`**: 
  * Captura a data atual no formato `YYYY-MM-DD` e a hora local.
  * Retorna uma string formatada no seguinte padrão:
    ```text
    [YYYY-MM-DD HH:MM:SS] - Mensagem do log
    ```

### `index.js`
Arquivo principal do projeto responsável pela execução da lógica de gravação.
* **Compatibilidade ES Modules:** Utiliza `fileURLToPath` e `path.dirname` para recriar as variáveis `__filename` e `__dirname` (que não estão disponíveis nativamente no modo `"module"`).
* **`salvarLogSystem(mensagemLog)`**:
  * Utiliza o módulo nativo `fs/promises` para operações assíncronas de arquivos.
  * Cria o diretório `logs/` de forma recursiva (caso ainda não exista).
  * Concatena a mensagem formatada no arquivo `logs/system.log` usando `fs.appendFile`.
  * Possui tratamento de exceções com `try/catch` para capturar possíveis erros de E/S.

---

## 🚀 Como Executar

### Pré-requisitos
* **Node.js** instalado (versão 14 ou superior recomendada).

### Passo a Passo

1. Clone ou baixe os arquivos do projeto no seu ambiente.
2. Abra o terminal na pasta raiz do projeto.
3. Execute o script principal com o comando:

```bash
node index.js
```

4. Após a execução, você verá a mensagem no terminal:
```text
Log Registrado com sucesso!
Log Registrado com sucesso!
```

5. O arquivo `logs/system.log` será gerado com o seguinte conteúdo (exemplo):
```text
[2026-09-11 16:36:00] - Inicialização do servidor concluída
[2026-09-11 16:36:00] - Conexão com o banco de dados estabelecida
```