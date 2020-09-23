import { SQL } from 'sql-template-strings';
import { BadRequestError } from '../../../../../errors/badRequestError';
import { BaseError } from '../../../../../errors/baseError';
import log from '../../../../../logger/log';
import { Time } from '../../../../../models/database/time';
import { User } from '../../../../../models/database/user';
import { runQuery } from '../../queryUtility';

export async function insert(
    user: User, time: string
): Promise<Time> {
    try {
        log.info('insert time called in mysql db')
        const insertTimeResult = await runQuery(
            SQL(`INSERT INTO times (userId,time, createdAt) VALUES(${user.id}, ${time}, NOW())`)
        )
        const createdTime: Time = { id: insertTimeResult.insertId, userId: user.id, time }
        return createdTime
    } catch (error) {
        if (error instanceof BaseError) {
            throw error
        } else {
            throw new BadRequestError(error, -104)
        }
    }
}

