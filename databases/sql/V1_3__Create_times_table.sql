CREATE TABLE IF NOT EXISTS Times (
    id int not null AUTO_INCREMENT PRIMARY KEY,
    userId int not null, 
    time VARCHAR(100) not null,
    createdAt timestamp not null
);