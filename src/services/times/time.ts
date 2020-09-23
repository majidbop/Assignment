
import * as timeDao from '../../drivers/times';
import log from '../../logger/log'
import { Time } from '../../models/database/time';
import { User } from '../../models/database/user';

export async function timeRegister(user: User, time: string): Promise<Time> {
    log.info("Register time called in time services called");
    const newTime: Time = await timeDao.insert(
        user, time
    );
    return newTime;
}

