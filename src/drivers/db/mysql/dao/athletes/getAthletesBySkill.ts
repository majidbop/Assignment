import { SQL } from 'sql-template-strings';
import { Filter } from '../../../../../models/interfaces';
import { BadRequestError } from '../../../../../errors/badRequestError';
import { BaseError } from '../../../../../errors/baseError';
import log from '../../../../../logger/log';
import { User } from '../../../../../models/database/user';
import { runQuery } from '../../queryUtility';
import { filtersConditions } from '../../rhsFilters';
import { Skill } from '../../../../../models/database/skill';
import { buildQuery } from '../../buildQuery';


async function getSelectedSkills(filters: Filter[]) {
    const selectedSkills: any[] = await runQuery(
        buildQuery(SQL`SELECT id FROM Skills WHERE 1 = 1`, ...filtersConditions(filters)));
    log.debug(`the result of skill is ${JSON.stringify(selectedSkills)}`)
    if (selectedSkills.length == 0) {
        return []
    }
    const skillsId = selectedSkills.map((skill: Partial<Skill>): number => skill.id);
    const childSkills: any[] = await runQuery(
        buildQuery(SQL`SELECT id FROM Skills WHERE 1 = 1`, ...filtersConditions([{ filter: "in", name: "parentId", value: skillsId }])));

    const allSkills = skillsId.concat(childSkills.map((skill: Partial<Skill>): number => skill.id));
    return allSkills
}

export async function getAthleteBySkill(filters: Filter[]): Promise<number[]> {
    try {
        log.info(`getAthleteBySkill called in Mysql`)
        log.debug(`going to select skills from DB by ${JSON.stringify(filters)}`)
        const selectedSkills = await getSelectedSkills(filters);
        const athletesBySkillsFilter = [{ filter: "in", name: "skill_id", value: selectedSkills }];
        log.debug(`going to select athletes by skills from DB by ${JSON.stringify(athletesBySkillsFilter)}`)
        const selectedAthletes: any[] = await runQuery(
            buildQuery(SQL`SELECT ath_id FROM SkillsAthletes WHERE 1 = 1`, ...filtersConditions(athletesBySkillsFilter)));
        return selectedAthletes.map(({ ath_id }): number => ath_id)
    } catch (error) {
        if (error instanceof BaseError) {
            throw error
        } else {
            throw new BadRequestError(error, -107)
        }
    }
}
