import { SQLStatement } from 'sql-template-strings';
/* eslint no-await-in-loop: "off" */
import { DbConnection } from '../pool';

export function runQuery(query: SQLStatement, connection: any = DbConnection.getPool()): Promise<any> {
    return new Promise((resolve, reject) => {
        connection.query(query, (error: any, results: any) => {
            if (error) {
                if (connection.rollback) {
                    connection.rollback(() => {
                        connection.release()
                        reject(error)
                    })
                } else {
                    reject(error)
                }
            } else {
                resolve(results)
            }
        })
    })
}