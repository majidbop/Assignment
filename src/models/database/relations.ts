export interface CompetitionAthlete {
    id: number;
    competitionId: number;
    athleteId: number;
    year: number;
    createdAt: Date;
};
export interface SkillAAthlete {
    id: number;
    skillId: number;
    athleteId: number;
    createdAt: Date;
};