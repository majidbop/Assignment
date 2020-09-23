import { User } from "../models/database/user";
import {
    insert as dbInsert,
} from './db/dao/times';
import log from '../logger/log';
import { Time } from "../models/database/time";


export async function insert(user: User, time: string): Promise<Time> {
    log.info('insert function in times file in drivers called')
    const newUser = await dbInsert(
        user, time
    )
    return newUser
}
