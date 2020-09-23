import { Time } from "../../../models/database/time";
import { Token } from "../../../models/database/token";
import { User } from "../../../models/database/user"

import * as mysqlTime from '../mysql/dao/times';

export async function insert(user: User, time: string): Promise<Time> {
    return mysqlTime.insert(user, time)
}