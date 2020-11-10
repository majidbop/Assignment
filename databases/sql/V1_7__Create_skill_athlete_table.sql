CREATE TABLE IF NOT EXISTS SkillsAthletes (
    id int not null AUTO_INCREMENT PRIMARY KEY,
    ath_id int not null,
    skill_id int not null,
    FOREIGN KEY (ath_id) REFERENCES Athletes(id),
    FOREIGN KEY (skill_id) REFERENCES Skills(id)
);

INSERT INTO SkillsAthletes(ath_id, skill_id)values(1, 1);
INSERT INTO SkillsAthletes(ath_id, skill_id)values(1, 2);
INSERT INTO SkillsAthletes(ath_id, skill_id)values(1, 3);
INSERT INTO SkillsAthletes(ath_id, skill_id)values(2, 4);
INSERT INTO SkillsAthletes(ath_id, skill_id)values(3, 5);