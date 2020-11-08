import express from 'express'
import { validateRequestProperty } from '../../../../middleware/validateRequestProperty'

import {
    userRegister,
    userLogin
} from '../../../../parametersSchemas'

import { register } from '../create';
import { login } from '../read';


const userPostRoutes = express.Router()

userPostRoutes.post('/login', validateRequestProperty(-105, userLogin, 'body'), login)
userPostRoutes.post('/', validateRequestProperty(-103, userRegister, 'body'), register)


export { userPostRoutes }
