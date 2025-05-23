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
