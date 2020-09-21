import { SQL } from 'sql-template-strings';
import { BadRequestError } from '../../../../../errors/badRequestError';
import { BaseError } from '../../../../../errors/baseError';
import log from '../../../../../logger/log';
import { User } from '../../../../../models/database/user';
import { runQuery } from '../../queryUtility';

export async function getUserByUsername(username: string): Promise<User[]> {
    try {
        log.info(`getUserforlogin called with ${username}`)
        const result = await runQuery(
            SQL`SELECT * FROM users WHERE username=${username};`)

        log.info(`the result of getUserByUsername is ${JSON.stringify(result)}`)
        return result.map((user: any) => <User>user)
    } catch (error) {
        if (error instanceof BaseError) {
            throw error
        } else {
            throw new BadRequestError(error, -107)
        }
    }
}
