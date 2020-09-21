import { v4 as uuid } from 'uuid';
import log from '../logger/log';

export const attachTraceId = (req: any, res: any, next: any) => {

    req.traceId = uuid()
    log.info(`trace id ${req.traceId} issued for new request`)
    next()
}


