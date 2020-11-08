
import { Filter } from '../../../models/interfaces';
import * as mysqlAthletes from '../mysql/dao/athletes/getAthletesBySkill';

export async function getAthleteBySkill(filters: Filter[]): Promise<number[]> {
    return mysqlAthletes.getAthleteBySkill(filters)
}