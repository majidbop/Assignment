CREATE TABLE IF NOT EXISTS Athletes (
    id int not null AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) not null,
    lastName VARCHAR(50) not null,
    bday timestamp not null
);

INSERT INTO Athletes(id, firstName, lastName, bday)values(1, "Anna", "Gasser", '1991-08-16 00:00:00' );
INSERT INTO Athletes(id, firstName, lastName, bday)values(2, "Tess", "Ledeux", '2001-11-23 00:00:00');
INSERT INTO Athletes(id, firstName, lastName, bday)values(3, "Nairo", "Quintana", '1990-02-04 00:00:00');
