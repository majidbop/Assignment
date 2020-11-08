import log from '../../../../logger/log';
import { User } from '../../../../models/presenter/user';
import * as tokenServices from '../../../../services/users/token';
import * as userServices from "../../../../services/users/user"

export const register = async (req: any, res: any, next: any) => {
    const {
        username, password, name
    } = req.body
    try {
        log.info('register user in user controller called')
        const user = await userServices.registerUser(username, password, name);
        const token = await tokenServices.generateToken(user);
        const response = { authToken: token.authToken, ...user } as User
        res.send(response);
    } catch (error) {
        next(error)
    }
}
