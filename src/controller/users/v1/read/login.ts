import { readUserTokens } from '../../../../drivers/users';
import log from '../../../../logger/log';
import { User } from '../../../../models/presenter/user';
import { loginUser } from '../../../../services/users/user';


export const login = async (req: any, res: any, next: any) => {
    try {
        const { username, password } = req.body
        const user = await loginUser(username, password);
        const token = await readUserTokens(user);
        const response = { authToken: token ? token.authToken : "", ...user } as User
        res.send(response);
    } catch (error) {
        next(error)
    }
}

