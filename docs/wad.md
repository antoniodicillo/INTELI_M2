# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

#### Autor do projeto

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
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  create_Events BOOLEAN,
  ban_Members BOOLEAN
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role INT REFERENCES roles(id) ON DELETE CASCADE,
  created_at DATE 
);

CREATE TABLE events (
 id SERIAL PRIMARY KEY,
 title TEXT,
 body TEXT,
 event_Date DATE,
 created_at DATE,
 host INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE subscriptions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  event_id INT REFERENCES events(id) ON DELETE CASCADE
);

INSERT INTO roles (name, createEvents, banMembers) 
VALUES ('User',false,false),
       ('Host',true,false),
       ('Admin',true,true);


INSERT INTO users (name, role) 
VALUES ('Antonio',3);




SELECT * FROM users;
-- SELECT * FROM roles;
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
