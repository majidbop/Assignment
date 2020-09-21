import { User } from "../models/database/user";
import {
    insert as dbInsert,
    getUserByUsername as dbGetUserByUsername,
    insertToken as dBInsertToken,
    readUserTokens as dBReadUserTokens
} from './db/dao/users';
import log from '../logger/log';
import { Token } from "../models/database/token";

export async function insert(username: string, password: string, name: string): Promise<User> {
    log.info('insert function in users file in drivers called')
    const newUser = await dbInsert(
        username,
        password,
        name,
    )
    return newUser
}

export async function getUserByUsername(username: string): Promise<User[]> {
    log.info('getUserForLogin function in users file in drivers called')
    return dbGetUserByUsername(username)
}

export async function insertToken(token: string, user: User): Promise<Token> {
    log.info('insertToken function in users file in drivers called')
    return dBInsertToken(token, user)
}
export async function readUserTokens(user: User): Promise<Token | undefined> {
    return dBReadUserTokens(user);
}