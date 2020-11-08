import { Filter } from "../models/interfaces";
import * as dataSource from './db/dao/athletes';

export async function getAthleteBySkill(filters: Filter[]): Promise<number[]> {
    return dataSource.getAthleteBySkill(filters)
}