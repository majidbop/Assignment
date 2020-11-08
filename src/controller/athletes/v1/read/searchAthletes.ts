
import {
    getRhsFilters, string, number, array,
} from '../../../../utility/query-params/rhsFilters'
import { getPaginationParams } from '../../../../utility/query-params/pagination'

export const searchAthletes = async (req: any, res: any, next: any) => {
    try {
        const { page, limit } = getPaginationParams(req.url)
        const filters = getRhsFilters(
            req.url,
            string('name'),
            number('age'),
            string('champions'),

        )


        res.send({ page, limit, filters, results: [] });
    } catch (error) {
        next(error)
    }
}
