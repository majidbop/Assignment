import url from 'url'
import { BadRequestError } from '../../errors/badRequestError';

const parseUrl = (requestUrl: string): { page: number, limit: number } => {
    const {
        query: { page = 0, limit = 20 },
    } = url.parse(requestUrl, true)

    return {
        page: parseInt(page.toString(), 10),
        limit: parseInt(limit.toString(), 10),
    }
}

const getPaginationParams = (requestUrl: string): { page: number, limit: number } => {
    const { page, limit } = parseUrl(requestUrl)

    if (!Number.isInteger(page)) {
        throw new BadRequestError('page must be an integer', -102)
    }

    if (!Number.isInteger(limit)) {
        throw new BadRequestError('limit must be an integer', -103)
    }

    return { page, limit }
}

const getPageCount = (totalCount: number, limit: number) => Math.ceil(totalCount / limit)
const getAllQueryParams = (requestUrl: string) => {
    const { query } = url.parse(requestUrl, true)
    return query
}
export { getPaginationParams, getPageCount, getAllQueryParams }
