import url from 'url'


export const parseUrl = (requestUrl: string, item: string): string | null => {
    const { query } = url.parse(requestUrl, true)
    if (item in query) {
        return query[item].toString()
    }
    return null
}

