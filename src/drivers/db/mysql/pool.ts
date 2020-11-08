import mysql from 'mysql';
import log from '../../../logger/log';
import { BaseError } from '../../../errors/baseError';

export = {
    connect(): mysql.Pool | undefined {
        log.info('Going to create a pool to connect to mysql')
        const mysqlInstance = mysql.createPool({
            connectionLimit: 10, // Todo: read from config
            host: process.env.DB_ADDRESS,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        })
        log.info('connected to mysql')
        return mysqlInstance
    },
    disconnect: (pool: mysql.Pool) => {
        if (!pool) {
            throw new BaseError('There is not any available DB connection', 500, 105)
        }
        pool.end()
    },
}
