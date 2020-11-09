import { AthletesPresenter } from "../models/presenter";
import { Filter } from "../models/interfaces";
import * as dataSource from './db/dao/athletes';

export async function getAthleteBySkill(filters: Filter[]): Promise<number[]> {
    return dataSource.getAthleteBySkill(filters)
}
export async function getAthleteByCompetition(filters: Filter[]): Promise<number[]> {
    return dataSource.getAthleteByCompetition(filters)
}
export async function getAthleteById(id: number): Promise<AthletesPresenter> {
    return dataSource.getAthleteById(id)
}
export async function getAthleteIdsByFilter(filters: Filter[]): Promise<number[]> {
    return dataSource.getAthleteIdsByFilter(filters)
}