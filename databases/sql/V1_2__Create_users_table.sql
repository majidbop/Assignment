CREATE TABLE IF NOT EXISTS Users (
    id int not null AUTO_INCREMENT PRIMARY KEY,
    username varchar(100) not null,
    password varchar(100) not null,
    name varchar(100) not null,
    createdAt timestamp not null
);