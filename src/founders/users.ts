import { getUserByUsername } from "../drivers/users";
import { NotFoundError } from "../errors/notFoundError";
import { User } from "../models/database/user";
import log from '../logger/log';

export async function getSpecificUserByUsername(username: string): Promise<User> {
    const users = await getUserByUsername(username);
    if (users.length == 0) {
        throw new NotFoundError(-107);
    }
    log.debug(`user in database is: ${users[0]}`)
    return users[0];
}