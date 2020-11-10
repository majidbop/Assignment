CREATE TABLE IF NOT EXISTS Competitions (
    id int not null AUTO_INCREMENT PRIMARY KEY,
    champName VARCHAR(50) not null UNIQUE
);

INSERT INTO Competitions(id, champName)values(1, "World Snowboard Tour");
INSERT INTO Competitions(id, champName)values(2, "FIS Snowboarding World Championship");
INSERT INTO Competitions(id, champName)values(3, "Winter Olympics");
INSERT INTO Competitions(id, champName)values(4, "FIS race");
INSERT INTO Competitions(id, champName)values(5, "FIS Freestyle World Championship");
INSERT INTO Competitions(id, champName)values(6, "Route du Sud");
INSERT INTO Competitions(id, champName)values(7, "Tour of the Basque Country");
INSERT INTO Competitions(id, champName)values(8, "Tour de France");
