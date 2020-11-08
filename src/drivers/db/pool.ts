import mysqlPool from './mysql/pool'
import { BaseError } from '../../errors/baseError'
import mysql from 'mysql'
export class DbConnection {
    static pool: mysql.Pool;

    static isConnected(): boolean {
        return DbConnection.pool != null
    }
    static getPool(): mysql.Pool { // Todo: define interface for pool
        if (!DbConnection.pool) {
            throw new BaseError('DB have not been connected', 500, 104)
        }
        return DbConnection.pool
    }
    static async connect(): Promise<void> {
        if (DbConnection.pool) {
            throw new BaseError('DB have been connected', 500, 104)
        }

        DbConnection.pool = await mysqlPool.connect()
    }
    static async disconnect(): Promise<void> {
        if (!DbConnection.pool) {
            throw new BaseError('There is not any available DB connection', 500, 105)
        }
        try {
            mysqlPool.disconnect(DbConnection.pool)

            DbConnection.pool = undefined
        } catch (error) {
            throw error
        }
    }
}
