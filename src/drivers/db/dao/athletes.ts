
import { AthletesPresenter } from '../../../models/presenter';
import { Filter } from '../../../models/interfaces';
import * as mysqlAthletes from '../mysql/dao/athletes';

export async function getAthleteBySkill(filters: Filter[]): Promise<number[]> {
    return mysqlAthletes.getAthleteBySkill(filters)
}

export async function getAthleteByCompetition(filters: Filter[]): Promise<number[]> {
    return mysqlAthletes.getAthleteByCompetition(filters)
}

export async function getAthleteById(id: number): Promise<AthletesPresenter> {
    return mysqlAthletes.getAthleteById(id)
}
export async function getAthleteIdsByFilter(filters: Filter[]): Promise<number[]> {
    return mysqlAthletes.getAthleteIdsByFilter(filters)
}