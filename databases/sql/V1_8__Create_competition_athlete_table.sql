CREATE TABLE IF NOT EXISTS CompetitionAthletes (
    id int not null AUTO_INCREMENT PRIMARY KEY,
    ath_id int not null,
    comp_id int not null,
    year int not null,
    FOREIGN KEY (ath_id) REFERENCES Athletes(id),
    FOREIGN KEY (comp_id) REFERENCES Competitions(id)
);

INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(1, 1, 2010);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(1, 1, 2011);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(1, 2, 2013);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(1, 3, 2014);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(1, 2, 2015);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(1, 2, 2016);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(1, 2, 2017);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(2, 4, 2016);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(2, 5, 2017);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(3, 6, 2012);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(3, 7, 2013);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(3, 8, 2014);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(3, 8, 2015);
INSERT INTO CompetitionAthletes(ath_id, comp_id, year)values(3, 8, 2016);