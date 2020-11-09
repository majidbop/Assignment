import { SQL } from 'sql-template-strings';
import { Filter } from '../../../../../models/interfaces';
import { BadRequestError } from '../../../../../errors/badRequestError';
import { BaseError } from '../../../../../errors/baseError';
import log from '../../../../../logger/log';
import { runQuery } from '../../queryUtility';
import { filtersConditions } from '../../rhsFilters';
import { Skill } from '../../../../../models/database/skill';
import { buildQuery } from '../../buildQuery';


async function getSelectedCompetitions(filters: Filter[]) {
    const selectedCompetitions: any[] = await runQuery(
        buildQuery(SQL`SELECT id FROM Competitions WHERE 1 = 1`, ...filtersConditions(filters)));
    log.debug(`the result of competition is ${JSON.stringify(selectedCompetitions)}`)
    if (selectedCompetitions.length == 0) {
        return []
    }
    const competitionsId = selectedCompetitions.map((competition: Partial<Skill>): number => competition.id);
    return competitionsId
}

export async function getAthleteByCompetition(filters: Filter[]): Promise<number[]> {
    try {
        log.info(`getAthleteByCompetition called in Mysql`)
        log.debug(`going to select skills from DB by ${JSON.stringify(filters)}`)
        const selectedCompetitions = await getSelectedCompetitions(filters);
        if (selectedCompetitions.length == 0) {
            return []
        }
        const athletesBySkillsFilter = [{ filter: "in", name: "comp_id", value: selectedCompetitions }];
        log.debug(`going to select athletes by comp_id from DB by ${JSON.stringify(athletesBySkillsFilter)}`)
        const selectedAthletes: any[] = await runQuery(
            buildQuery(SQL`SELECT ath_id FROM CompetitionAthletes WHERE 1 = 1`, ...filtersConditions(athletesBySkillsFilter)));
        return selectedAthletes.map(({ ath_id }): number => ath_id)
    } catch (error) {
        if (error instanceof BaseError) {
            throw error
        } else {
            throw new BadRequestError(error, -107)
        }
    }
}
