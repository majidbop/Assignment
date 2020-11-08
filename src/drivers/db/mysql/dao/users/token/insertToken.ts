import { SQL } from 'sql-template-strings';
import { User } from '../../../../../../models/database/user';
import { BadRequestError } from '../../../../../../errors/badRequestError';
import { BaseError } from '../../../../../../errors/baseError';
import log from '../../../../../../logger/log';
import { runQuery } from '../../../queryUtility';
import { Token } from '../../../../../../models/database/token';

export async function insertToken(authToken: string, user: User): Promise<Token> {
    try {
        log.info('insert token called in mysql db')
        const result = await runQuery(
            SQL`INSERT INTO tokens (authToken, userId, username, createdAt) VALUES (${authToken}, ${user.id}, ${user.username}, NOW())`
        )
        return { id: result.insertId, authToken } as Token
    } catch (error) {
        if (error instanceof BaseError) {
            throw error
        } else {
            throw new BadRequestError(error, -109)
        }
    }
}
module.exports = {
    insertToken,
}
