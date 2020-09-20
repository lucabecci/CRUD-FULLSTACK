/*Creacion de la base de datos*/
CREATE DATABASE simplecrud;

/*Creacion de la tabla para usuarios*/
CREATE TABLE projects(
    id SERIAL PRIMARY KEY, 
    title VARCHAR(30),
    description text,
    date DATE NOT NULL DEFAULT CURRENT_DATE
);

/*Insertando valores en la tabla users*/
INSERT INTO projects (title, description) VALUES
    ('test1', 'desc test 1'),
    ('test2', 'desc test 2');