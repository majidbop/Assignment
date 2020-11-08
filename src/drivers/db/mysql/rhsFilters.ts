import { SQLStatement } from "sql-template-strings"
import { Filter } from "../../../models/interfaces"

import SQL from 'sql-template-strings'

const createClause = (dbName: string | string[], value: any): SQLStatement => {
    if (!Array.isArray(dbName)) {
        return SQL` AND `.append(dbName).append(value)
    }

    return SQL` AND (`
        .append(
            dbName
                .map(name => SQL``.append(name).append(value))
                .reduce((prevQuery, query) => prevQuery.append(' OR ').append(query))
        )
        .append(')')
}

const toSqlCondition = (filter: Filter): SQLStatement => {
    switch (filter.filter) {
        default:
            throw new Error(`Invalid filter ${filter.filter} for ${filter.name}`)
        case 'contains':
            const wrappedFilter = `%${filter.value}%`
            return createClause(filter.name, SQL` LIKE ${wrappedFilter}`)
        case 'exact':
            return createClause(filter.name, SQL` = ${filter.value}`)
        case 'gt':
            return createClause(filter.name, SQL` > ${filter.value}`)
        case 'gte':
            return createClause(filter.name, SQL` >= ${filter.value}`)
        case 'lt':
            return createClause(filter.name, SQL` < ${filter.value}`)
        case 'lte':
            return createClause(filter.name, SQL` <= ${filter.value}`)
        case 'in':
            return createClause(filter.name, SQL` in (${filter.value})`)
        case 'not in':
            return createClause(filter.name, SQL` not in (${filter.value})`)
        case 'asc':
            return SQL` ORDER BY ${filter.value} ASC`
        case 'desc':
            return SQL` ORDER BY ${filter.value} DESC`
    }
}
export const filtersConditions = (filters: Filter[]): SQLStatement[] => filters.map(toSqlCondition)

