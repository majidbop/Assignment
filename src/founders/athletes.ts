import { Filter } from '../models/interfaces'
import { Athlete } from '../models/database/athlete'
import log from '../logger/log';
import { getAthleteBySkill } from '../drivers/athletes';
export async function getAthletes(filters: Filter[], page: number, limit: number): Promise<Athlete[]> {
    log.info("Get Athletes in founder layer called with following infos", "filters: ", filters, " ,page: ", page, "limit: ", limit);
    const relationFilters = filters.filter((filter: Filter): Boolean => (filter.name == 'skill' || filter.name == 'competition'));
    const usersId = await Promise.all(relationFilters.map((filter: Filter): Promise<number[]> => {
        switch (filter.name.toLowerCase()) {
            case 'skill':
                filter.name = 'skillName';
                return getAthleteBySkill([filter])
            case 'competition':
                filter.name = 'champName';
            // return getAthleteByChampions([filter])
            default:
                break;
        }
        return new Promise(resolve => resolve([]))
    }))

    log.debug(`Users ids are: ${JSON.stringify(usersId)}`)
    // if it's empty return empty
    // build new Filter with pervious ids and name and age
    // run query and return it 
    return []
}