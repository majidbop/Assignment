import { Filter } from '../models/interfaces'
import { Athlete } from '../models/database/athlete'
import log from '../logger/log';
import { getAthleteBySkill, getAthleteByCompetition, getAthleteIdsByFilter, getAthleteById } from '../drivers/athletes';
import { AthletesPresenter } from '../models/presenter';

export async function getAthletes(filters: Filter[], page: number, limit: number): Promise<AthletesPresenter[]> {
    log.info("Get Athletes in founder layer called with following infos", "filters: ", filters, " ,page: ", page, "limit: ", limit);
    const relationFilters = filters.filter((filter: Filter): Boolean => (filter.name == 'skill' || filter.name == 'champions'));
    const usersId = (await Promise.all(relationFilters.map((filter: Filter): Promise<number[]> => {
        switch (filter.name.toLowerCase()) {
            case 'skill':
                return getAthleteBySkill([{ filter: filter.filter, name: 'skillName', value: filter.value }])
            case 'champions':
                return getAthleteByCompetition([{ filter: filter.filter, name: 'champName', value: filter.value }])
            default:
                break;
        }
        return new Promise(resolve => resolve([]))
    }))).reduce((prev: number[], current: number[]): number[] => prev.concat(current), [])
    const athleteFilters = filters.filter((filter: Filter): Boolean => (filter.name != 'skill' && filter.name != 'champions'));
    athleteFilters.push({ filter: "in", name: "id", value: usersId })
    log.debug(`athleteFilters: ${JSON.stringify(athleteFilters)}`)
    const athletesId: number[] = await getAthleteIdsByFilter(athleteFilters);
    const athletes: AthletesPresenter[] = await Promise.all(athletesId.map((athleteId: number): Promise<AthletesPresenter> => {
        return getAthleteById(athleteId);
    }));
    return athletes
}