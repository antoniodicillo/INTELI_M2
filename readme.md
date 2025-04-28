# Filmeet - Plataforma de Eventos com MVC e Supabase 


Este projeto é uma plataforma de eventos com o foco em eventos de filmes como cinema drive ins, meet and greets ou eventos que atores famosos vão estar. 

Ele utiliza Node.js seguindo o padrão MVC e PostgreSQL como banco de dados.

## Requisitos

- Node.js (versão X.X.X)
- PostgreSQL (versão X.X.X)

## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/antoniodicillo/INTELI_M2
   cd INTELI_M2
```

2. **Instalar as dependências:**
    
```bash
npm install
```
    
3. **Executar o Projeto**

```bash
npm start
```

Scripts Disponíveis
-------------------

* `npm start`: Inicia o servidor Node.js.
* `npm run dev`: Inicia o servidor com `nodemon`, reiniciando automaticamente após alterações no código.
* `npm run test`: Executa os testes automatizados.
* `npm run test:coverage`: Executa os testes e gera um relatório de cobertura de código.

Estrutura de Diretórios
-----------------------

```
INTELI_M2/
│
├── config/                # Arquivos de configuração
│   └── database.js
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js
├── docs/           # Documentação WAD
│   └── wad.md
├── models/                # Definição de modelos de dados 
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── assets/                # Arquivos públicos como imagens e fontes
│   └── modelo-banco.pdf
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints 

```

Licença
-------

Este projeto está licenciado sob a Licença MIT.
