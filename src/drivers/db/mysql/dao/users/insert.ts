import { SQL } from 'sql-template-strings';
import { BadRequestError } from '../../../../../errors/badRequestError';
import { BaseError } from '../../../../../errors/baseError';
import log from '../../../../../logger/log';
import { User } from '../../../../../models/database/user';
import { runQuery } from '../../queryUtility';

export async function insert(
    username: string, password: string, name: string
): Promise<User> {
    try {
        log.info('insert user called in mysql db')
        const insertUserResult = await runQuery(
            SQL(`INSERT INTO users (username,password,name, createdAt) VALUES(${username}, ${password}, ${name}. NOW())`)
        )
        const createdUser: User = { id: insertUserResult.insertId, username, name }
        return createdUser
    } catch (error) {
        if (error instanceof BaseError) {
            throw error
        } else {
            throw new BadRequestError(error, -104)
        }
    }
}

