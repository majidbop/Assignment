import crypto from 'crypto'
import { insertToken } from '../../drivers/users'
import log from '../../logger/log'
import { Token } from '../../models/database/token'
import { User } from '../../models/database/user'
const jwtSecret: string = 'Th!$Is$eCR3tKeY' //Todo read from secret config

export async function generateToken(user: User): Promise<Token> {
    const payload = { username: user.username, id: user.id };
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64')
    const authToken = crypto.createHmac('sha256', jwtSecret).update(encodedPayload).digest('base64')
    const token = await insertToken(authToken, user);
    return token
}