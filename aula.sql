CREATE TABLE alunos (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  turma TEXT NOT NULL,
  curso TEXT NOT NULL,
  data_nascimento DATE
);

CREATE TABLE cursos (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  duracao_anos INT
);

CREATE TABLE matriculas (
  id SERIAL PRIMARY KEY,
  aluno_id INT REFERENCES alunos(id) ON DELETE CASCADE,
  curso_id INT REFERENCES cursos(id) ON DELETE CASCADE,
  data_matricula DATE DEFAULT CURRENT_DATE
);

INSERT INTO alunos (nome, turma, curso, data_nascimento)
VALUES ('Carlos Quaglia', '15', 'Ciência da Computação', '2005-05-15'),
       ('Joao Agmont', '15', 'Engenharia de Software', '2007-03-30'),
       ('Luiz Hinuy', '15', 'Ciência da Computação', '2003-05-06'),
       ('Maria Arielly', '15', 'Engenharia da Computação', '2002-05-10'),
       ('Rafael Cabral', '15', 'ADM Tech', '2005-05-10'),
       ('Thulio Bacco Pinto', '15', 'Ciência da Computação', '2005-04-22'),
       ('Antonio Andre', '15', 'Engenharia da Computação', '2006-09-26'),
       ('Breno Silva', '15', 'Engenharia da Computação', '2005-08-04'),
       ('Vinicius Maciel', '15', 'SI', '2005-04-09'),
       ('Emanuelly Dias', '15', 'Engenharia de Software', '2006-04-13');

INSERT INTO cursos (nome, duracao_anos)
VALUES ('ADM Tech', 4), -- 1
       ('Engenharia da Computação', 4), -- 2
       ('Engenharia de Software', 4), -- 3
       ('Ciência da Computação', 4), -- 4
       ('SI', 4); -- 5

INSERT INTO matriculas (aluno_id, curso_id)
VALUES (1, 4),
       (2, 3),
       (3, 4),
       (4, 2),
       (5, 1),
       (6, 4),
       (7, 2),
       (8, 2),
       (9, 5),
       (10, 3);

SELECT * FROM alunos;
SELECT * FROM cursos;
SELECT * FROM matriculas;

SELECT a.nome AS aluno, c.nome AS curso, m.data_matricula
FROM matriculas m
JOIN alunos a ON m.aluno_id = a.id
JOIN cursos c ON m.curso_id = c.id;

