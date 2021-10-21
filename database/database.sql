CREATE DATABASE apontador;

CREATE TABLE grupos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description TEXT,
    link TEXT,
    lat NUMERIC,
    lng NUMERIC
);

INSERT INTO grupos (name, description, link, lat, lng)
    VALUES ('escola', 'grupo da escola', 'www.pudim.com.br', 41.3977381, 2.190471916),
           ('faculdade', 'grupo da faculdade', 'www.google.com.br', 40.0000000, 2.000000000);