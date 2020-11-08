import { SQLStatement } from 'sql-template-strings';
/* eslint no-await-in-loop: "off" */
import { DbConnection } from '../pool';
import mysql from 'mysql'
import log from '../../../logger/log';

export function runQuery(query: SQLStatement, connection: mysql.Pool = DbConnection.getPool()): Promise<any> {
    log.debug(`query is ${JSON.stringify(query)}`)
    return new Promise((resolve, reject) => {
        connection.query(query, (error: any, results: any) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}