CREATE TABLE IF NOT EXISTS event (
  id integer PRIMARY KEY,
  title varchar,
  body varchar,
  eventDate timestamp,
  created_at timestamp DEFAULT NOW(),
  host_id integer NOT NULL,
  img_path varchar,
  password varchar
);

CREATE TABLE IF NOT EXISTS users (
  id integer PRIMARY KEY,
  user_id integer,
  name varchar,
  surname varchar,
  birth_date date,
  phone_number integer,
  role integer NOT NULL,
  created_at timestamp DEFAULT NOW(),
  profile_picture_path varchar
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id integer PRIMARY KEY,
  user_id integer NOT NULL,
  event_id integer NOT NULL
);

CREATE TABLE IF NOT EXISTS roles (
  id integer PRIMARY KEY,
  name integer NOT NULL,
  createEvents bool NOT NULL,
  banMembers bool NOT NULL
);


ALTER TABLE event 
    ADD FOREIGN KEY (host_id) 
    REFERENCES users (user_id);

ALTER TABLE subscriptions 
    ADD FOREIGN KEY (user_id) 
    REFERENCES users (user_id);

ALTER TABLE subscriptions 
    ADD FOREIGN KEY (event_id) 
    REFERENCES event (id);

ALTER TABLE roles 
    ADD FOREIGN KEY (id) 
    REFERENCES users (role);

INSERT INTO roles (name, create_events, ban_users) 
VALUES ('User',false,false),
       ('Host',true,false),
       ('Admin',true,true);
