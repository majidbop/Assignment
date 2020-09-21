import { SQL } from 'sql-template-strings';
import { User } from '../../../../../../models/database/user';
import { BadRequestError } from '../../../../../../errors/badRequestError';
import { BaseError } from '../../../../../../errors/baseError';
import { runQuery } from '../../../queryUtility';
import { Token } from '../../../../../../models/database/token';

export async function readUserTokens(user: User): Promise<Token | undefined> {
    try {
        const result = await runQuery(
            SQL`SELECT *  from tokens WHERE userId=${user.id} ORDER BY createdAt desc LIMIT 0, 1;`)

        if (result.length > 0) return <Token>result[0];
        return undefined;
    } catch (error) {
        if (error instanceof BaseError) {
            throw error
        } else {
            throw new BadRequestError(error, -109)
        }
    }
}