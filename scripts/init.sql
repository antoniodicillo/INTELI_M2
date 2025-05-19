CREATE TABLE IF NOT EXISTS event (
  id SERIAL PRIMARY KEY,
  title varchar NOT NULL,
  body varchar,
  eventDate timestamp,
  created_at timestamp DEFAULT NOW(),
  host_id integer NOT NULL,
  img_path varchar
);

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

CREATE TABLE IF NOT EXISTS subscriptions (
  id SERIAL PRIMARY KEY,
  user_id integer NOT NULL,
  event_id integer NOT NULL
);

CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  create_events bool NOT NULL,
  ban_users bool NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_user_email ON users (email);

ALTER TABLE event
  ADD CONSTRAINT fk_host_id FOREIGN KEY (host_id) REFERENCES users(id) ON DELETE SET NULL;

ALTER TABLE subscriptions
    ADD CONSTRAINT fk_sub_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL;

ALTER TABLE subscriptions
    ADD CONSTRAINT fk_event_id FOREIGN KEY (event_id) REFERENCES event(id) ON DELETE SET NULL;

ALTER TABLE users
    ADD CONSTRAINT fk_role_id FOREIGN KEY (role) REFERENCES roles(id) ON DELETE SET NULL;


INSERT INTO roles (name, create_events, ban_users) 
VALUES ('User',false,false),
       ('Host',true,false),
       ('Admin',true,true);

       