
import {
    getRhsFilters, string, number, array,
} from '../../../../utility/query-params/rhsFilters'
import { getPaginationParams } from '../../../../utility/query-params/pagination'
import { getAthletes } from '../../../../founders/athletes'

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

        getAthletes(filters, page, limit)
        res.send({ page, limit, filters, results: [] });
    } catch (error) {
        next(error)
    }
}
