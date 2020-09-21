import userPostRoutes = require('express');
import { validateRequestProperty } from '../../../../middleware/validateRequestProperty'

import {
    userRegister,
    userLogin
} from '../../../../parametersSchemas'

import { register } from '../create';
import { login } from '../read';


userPostRoutes.Router().post('/login', validateRequestProperty(-105, userLogin, 'body'), login)
userPostRoutes.Router().post('/', validateRequestProperty(-103, userRegister, 'body'), register)


export { userPostRoutes } 
