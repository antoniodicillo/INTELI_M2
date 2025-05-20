# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Filmeet

#### Antonio Di Cillo

## Sumário

1. [Introdução](#c1)
2. [Visão Geral da Aplicação Web](#c2)
3. [Projeto Técnico da Aplicação Web](#c3)
4. [Desenvolvimento da Aplicação Web](#c4)
5. [Referências](#c5)

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

O Filmeet é uma plataforma web desenvolvida para conectar fãs de cinema a eventos exclusivos, como exibições em drive-ins, encontros com atores e sessões especiais. Construído com arquitetura MVC e utilizando Supabase para banco de dados e autenticação, o projeto oferece uma solução escalável e segura para a descoberta e gestão de eventos cinematográficos.

Com a crescente demanda por experiências interativas no universo do entretenimento, o Filmeet surge como uma ferramenta centralizada, permitindo que usuários encontrem eventos relevantes, realizem inscrições e interajam com outros fãs. A aplicação prioriza uma experiência intuitiva, garantindo acesso rápido e responsivo em diferentes dispositivos.

Além de facilitar a conexão entre organizadores e participantes, o sistema integra recursos como recomendações personalizadas, notificações em tempo real e avaliações pós-evento, fortalecendo a comunidade cinematográfica. O Filmeet não apenas simplifica o acesso a experiências exclusivas, mas também se posiciona como um hub digital para fãs que buscam ir além da experiência tradicional de cinema.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

_Posicione aqui sua(s) Persona(s) em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário._

### 2.2. User Stories (Semana 01 - opcional)

_Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária._

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados (Semana 3)

<img src="../assets/database/modelo-banco.png">

```sql
-- Cria a tabela eventos se ela não existe
CREATE TABLE IF NOT EXISTS event (
  id SERIAL PRIMARY KEY,
  host_id integer DEFAULT 1,
  title varchar NOT NULL,
  body varchar,
  eventDate date,
  event_time time,
  event_location varchar,
  created_at timestamp DEFAULT NOW(),
  img_path varchar
);

-- Cria a tabela users se ela não existe
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY UNIQUE,
  email varchar NOT NULL UNIQUE,
  name varchar,
  surname varchar,
  birth_date date,
  phone_number integer,
  role integer NOT NULL,
  created_at timestamp DEFAULT NOW(),
  profile_picture_path varchar,
  banned bool DEFAULT false
);

-- Cria a tabela de inscrições de um evento
CREATE TABLE IF NOT EXISTS subscriptions (
  id SERIAL PRIMARY KEY,
  user_id integer NOT NULL,
  event_id integer NOT NULL
);

-- Cria a tabela de cargos
CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  create_events bool NOT NULL, -- Bool que define se o usuário pode criar eventos
  ban_users bool NOT NULL -- Bool que define se o usuário pode negar o acesso a conta de alguem 
);

-- Configura a foreign key do criador do evento para sua tabela na users
ALTER TABLE event
  ADD CONSTRAINT fk_host_id FOREIGN KEY (host_id) REFERENCES users(id) ON DELETE SET NULL;

-- Configura a foreign key dos usuários inscritos em um evento
ALTER TABLE subscriptions
    ADD CONSTRAINT fk_sub_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL;

-- Configura a foreign key do evento que um usuário foi inscrito
ALTER TABLE subscriptions
    ADD CONSTRAINT fk_event_id FOREIGN KEY (event_id) REFERENCES event(id) ON DELETE SET NULL;

-- Configura a foreign key dos usuários e seus cargos
ALTER TABLE users
    ADD CONSTRAINT fk_role_id FOREIGN KEY (role) REFERENCES roles(id) ON DELETE SET NULL;

-- Insere alguns cargos na tabela de cargos
INSERT INTO roles (name, create_events, ban_users) 
VALUES ('User',false,false),
       ('Host',true,false),
       ('Admin',true,true);

-- Insere um usuário admin na tabela users
INSERT INTO users (name,surname,email,role) 
VALUES ('Filmeet', 'Admin', 'filmeet@filmeet.com', 3);

-- Cria alguns eventos de exemplo
INSERT INTO event (title, body, eventDate, host_id)
VALUES ('Evento numero 1', 'Um evento muito bom', '2025-10-02', 1),
       ('Evento numero dos', 'Mmmmmmmmmmmmmmmmmmmm mmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ', '2025-10-02', 1),
       ('Evento numero 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2025-10-03', 1);

```

### 3.1.1 BD e Models (Semana 5)

_Descreva aqui os Models implementados no sistema web_

### 3.2. Arquitetura (Semana 5)

_Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário._

**Instruções para criação do diagrama de arquitetura**

- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.

_Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View._

### 3.3. Wireframes (Semana 03 - opcional)

[Link do figma](https://www.figma.com/design/D6RzoNmTXUZDepGtL6ENZR/Untitled?node-id=0-1&p=f&t=pOEcIoc06lOksvhz-0)

### 3.4. Guia de estilos (Semana 05 - opcional)

_Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução._

### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

_Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização)._

### 3.6. WebAPI e endpoints (Semana 05)

_Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema._

### 3.7 Interface e Navegação (Semana 07)

_Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

_VIDEO: Insira o link do vídeo demonstrativo nesta seção_
_Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

_Indique pontos fortes e pontos a melhorar de maneira geral._
_Relacione também quaisquer outras ideias que você tenha para melhorias futuras._

## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que o leitor possa consultar caso ele se interessar em aprofundar._<br>

---

---
