
import {
    getRhsFilters, string, number, array,
} from '../../../../utility/query-params/rhsFilters'
import { getPaginationParams } from '../../../../utility/query-params/pagination'
import { getAthletes } from '../../../../finders/athletes'

export const searchAthletes = async (req: any, res: any, next: any) => {
    try {
        const { page, limit } = getPaginationParams(req.url)
        const filters = getRhsFilters(
            req.url,
            string('name'),
            number('age'),
            string('skill'),
            string('champions'),

        )

        const athletes = await getAthletes(filters, page, limit)
        res.send({ page, limit, filters, results: athletes });
    } catch (error) {
        next(error)
    }
}
