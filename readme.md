# Filmeet - Plataforma de Eventos com MVC e Supabase 

O Filmeet é uma plataforma web desenvolvida para conectar fãs de cinema a eventos exclusivos, como exibições em drive-ins, encontros com atores e sessões especiais. Construído com arquitetura MVC e utilizando Supabase para banco de dados e autenticação, o projeto oferece uma solução escalável e segura para a descoberta e gestão de eventos cinematográficos.

Com a crescente demanda por experiências interativas no universo do entretenimento, o Filmeet surge como uma ferramenta centralizada, permitindo que usuários encontrem eventos relevantes, realizem inscrições e interajam com outros fãs. A aplicação prioriza uma experiência intuitiva, garantindo acesso rápido e responsivo em diferentes dispositivos.

Além de facilitar a conexão entre organizadores e participantes, o sistema integra recursos como recomendações personalizadas, notificações em tempo real e avaliações pós-evento, fortalecendo a comunidade cinematográfica. O Filmeet não apenas simplifica o acesso a experiências exclusivas, mas também se posiciona como um hub digital para fãs que buscam ir além da experiência tradicional de cinema.

O projeto utiliza Node.js seguindo o padrão MVC e PostgreSQL como banco de dados.

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
* `npm run init-db`: Inicia o processo de migrations do banco de dados

Estrutura de Diretórios
-----------------------

```
INTELI_M2/
│
├── assets/                # Arquivos de configuração
│   └── database/             # Arquivos relacionados ao banco de dados
│   └── images/               # Imagens estáticas utilizadas no projeto
│       └── backdrops/               # Imagens de fundo do site
│       └── icons/                   # Ícones do site
├── config/                # Arquivos de configuração
│   └── database.js
├── controllers/           # Lógica de controle das requisições
├── docs/                  # Documentação WAD
├── models/                # Definição de modelos de dados 
├── routes/                # Definição das rotas do projeto
├── scripts/               # Arquivos de JavaScript públicos
│   └── init.sql              # SQL utilizado para fazer uma migration
│   └── runSQLScript.js       # Script que utiliza o init SQL para fazer a migration
├── services/              # Serviços auxiliares do projeto
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── views/                 # Arquivos de testes unitários
│   └── pages/                # Arquivos html que compõem as páginas web
│   └── partials/             # Componentes em html que são utilizados nas pages
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
├── rest.http              # Teste de endpoints 
├── postcss.config.js      # Configurações do postcss
└── tailwindconfig.js      # Configurações do tailwindcss

```

Licença
-------

Este projeto está licenciado sob a Licença MIT.
