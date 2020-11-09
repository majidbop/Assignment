import { User } from "../../models/database/user"
import { Md5 } from 'ts-md5/dist/md5';
import log from '../../logger/log'
import * as userDao from '../../drivers/users'
import { getSpecificUserByUsername } from "../../finders/users";
import { BadRequestError } from "../../errors/badRequestError";
export async function registerUser(username: string, password: string, name: string): Promise<User> {
    log.info("Register user called in user services called");
    const newUser: User = await userDao.insert(
        username,
        password,
        name,
    );
    return newUser;
}

export async function loginUser(username: string, password: string): Promise<User> {
    log.info("loginUser user called in user services called");
    const candidateUser: User = await getSpecificUserByUsername(username);
    if (candidateUser.password !== Md5.hashStr(password)) {
        throw new BadRequestError("There isn't any user with requested information", -108)
    }
    return candidateUser;
}