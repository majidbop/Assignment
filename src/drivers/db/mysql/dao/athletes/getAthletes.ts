import { SQL } from 'sql-template-strings';
import { Filter } from '../../../../../models/interfaces';
import { BadRequestError } from '../../../../../errors/badRequestError';
import { BaseError } from '../../../../../errors/baseError';
import log from '../../../../../logger/log';
import { runQuery } from '../../queryUtility';
import { filtersConditions } from '../../rhsFilters';
import { Skill } from '../../../../../models/database/skill';
import { buildQuery } from '../../buildQuery';
import { Athlete } from '../../../../../models/database/indext';
import { AthletesPresenter } from '../../../../../models/presenter';


export async function getAthleteById(id: number): Promise<AthletesPresenter> {
    try {
        log.info(`getAthleteById called in Mysql`)
        log.debug(`going to select athlete from DB by id in ${id}`)

        const selectedAthletes: any[] = await runQuery(
            buildQuery(
                SQL`SELECT id, firstName,lastName , bday  FROM Athletes WHERE id=${id};`
            )
        );
        if (selectedAthletes.length == 0) {
            return null
        }
        const skillsName: string = (await runQuery(
            buildQuery(
                SQL`SELECT s.skillName as skillName FROM Skills as s, SkillsAthletes as sa WHERE sa.skill_id = s.id AND sa.ath_id=${selectedAthletes[0].id};`
            )
        ))
            .map((obj: { skillName: string }): string => obj.skillName)
            .reduce((prevStr: string, skillName: string) => prevStr + ' ' + skillName + ',', '');
        const championsName: string = (await runQuery(
            buildQuery(
                SQL`SELECT c.champName as champName, ca.year as year FROM Competitions as c, CompetitionAthletes as ca WHERE ca.comp_id = c.id AND ca.ath_id=${selectedAthletes[0].id};`
            )
        ))
            .map((obj: { champName: string, year: number }): string => obj.champName + ' ' + obj.year)
            .reduce((prevStr: string, champName: string) => prevStr + ' ' + champName + ',', '');
        return { fullName: selectedAthletes[0].firstName + " " + selectedAthletes[0].lastName, birthDay: selectedAthletes[0].bDay, skills: skillsName, Championships: championsName }
    } catch (error) {
        if (error instanceof BaseError) {
            throw error
        } else {
            throw new BadRequestError(error, -107)
        }
    }
}

export async function getAthleteIdsByFilter(filters: Filter[]): Promise<number[]> {
    try {
        log.info(`getAthleteBySkill called in Mysql`)
        log.debug(`going to select athlete from DB by ${JSON.stringify(filters)}`)

        const selectedAthletes: any[] = await runQuery(
            buildQuery(SQL`SELECT id FROM Athletes WHERE 1 = 1`, ...filtersConditions(filters)));
        return selectedAthletes.map(({ id }): number => id)
    } catch (error) {
        if (error instanceof BaseError) {
            throw error
        } else {
            throw new BadRequestError(error, -107)
        }
    }
}
