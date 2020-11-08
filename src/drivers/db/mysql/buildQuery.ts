import { SQLStatement } from "sql-template-strings"

const buildQuery = (query: SQLStatement, ...appendees: any[]) => appendees.reduce((accumulator, appendee) => {
    if (appendee) {
        return accumulator.append(appendee)
    }

    return accumulator
}, query)

export { buildQuery }
