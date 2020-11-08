import log from '../../../../logger/log';
import { Time } from '../../../../models/database/time';
import { Time as presenterTime } from '../../../../models/presenter/time';
import { timeRegister } from '../../../../services/times/time';


export const registerTime = async (req: any, res: any, next: any) => {
    const {
        time
    } = req.body

    try {
        const { user } = req.body
        log.info('register time in time controller called')
        const createdTime: Time = await timeRegister(user, time);
        const response = { id: createdTime.id, time } as presenterTime
        res.send(response);
    } catch (error) {
        next(error)
    }
}
