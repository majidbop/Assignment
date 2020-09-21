import { Token } from "../../../models/database/token";
import { User } from "../../../models/database/user"

import * as mysqlUser from '../mysql/dao/users/';

export async function insert(username: string, password: string, name: string): Promise<User> {
    return mysqlUser.insert(username, password, name)
}
export async function getUserByUsername(username: string): Promise<User[]> {
    return mysqlUser.getUserByUsername(username);
}
export async function insertToken(token: string, user: User): Promise<Token> {
    return mysqlUser.insertToken(token, user);
}
export async function readUserTokens(user: User): Promise<Token | undefined> {
    return mysqlUser.readUserTokens(user);
}