import url from 'url'
import { flatten } from 'lodash'
import { BadRequestError } from '../../errors/badRequestError'
import { Filter } from '../../models/interfaces'

const filterParser = (validFilters: string[], type: string) => (filterName: (string | string[])) => (query: any) => {
    let parameter
    if (Array.isArray(filterName)) {
        parameter = filterName.map((item: string) => query[item])
        parameter = parameter.filter(item => item !== undefined)
        if (parameter.length === 0) {
            return []
        }
    } else {
        parameter = query[filterName]
        if (parameter === undefined) {
            return []
        }
    }

    const filters = Array.isArray(parameter) ? parameter : [parameter]

    return filters.map((filterString) => {
        const [filter, value] = filterString.split(':')

        if (!validFilters.includes(filter)) {
            throw new BadRequestError(`Invalid filter '${filter}' for type '${type}'`, -120)
        }
        if (type === 'number') {
            return { name: filterName, filter, value: parseInt(value, 10) }
        }
        if (filter === 'in') {
            return { name: filterName, filter, value: value.split(',') }
        }
        return { name: filterName, filter, value }
    })
}

const getRhsFilters = (requestUrl: string, ...parsers: any): Filter[] => {
    const { query } = url.parse(requestUrl, true)

    return flatten(parsers.map((parser: any) => parser(query)))
}

const string = filterParser(['contains', 'exact'], 'string')
const date = filterParser(['gt', 'gte', 'lt', 'lte'], 'date')
const number = filterParser(['gt', 'gte', 'lt', 'lte', 'exact'], 'number')
const sort = filterParser(['asc', 'desc'], 'sort')
const enumerable = filterParser(['exact'], 'enumerable')
const array = filterParser(['in'], 'string')

const function1 = ({ filter, value }: { filter: string, value: number | string }) => ({ filter, value })
const getFilter = (name: string, filters: { name: string, filter: string, value: number | string }[]) => filters.filter(({ name: filterName }) => filterName === name).map(function1)

export {
    string,
    date,
    enumerable,
    getRhsFilters,
    getFilter,
    sort,
    number,
    array,
}
