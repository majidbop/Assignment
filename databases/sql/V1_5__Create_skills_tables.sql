CREATE TABLE IF NOT EXISTS Skills (
    id int not null AUTO_INCREMENT PRIMARY KEY,
    skillName VARCHAR(50) not null,
    parentId int null
);

INSERT INTO Skills(id, skillName, parentId)values(1, "Winter sports", null);
INSERT INTO Skills(id, skillName, parentId)values(2, "snowboarding", 1);
INSERT INTO Skills(id, skillName, parentId)values(3, "gymnastics", null);
INSERT INTO Skills(id, skillName, parentId)values(4, "Skiing", 1  );
INSERT INTO Skills(id, skillName, parentId)values(5, "Cycling", 0  );

