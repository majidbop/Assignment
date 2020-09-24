create table Tokens (
    id int not null AUTO_INCREMENT PRIMARY KEY,
    authToken varchar(100) not null,
    userId int not null,
    createdAt timestamp not null
);
