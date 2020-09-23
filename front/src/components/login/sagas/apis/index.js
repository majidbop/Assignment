import axios from 'axios'
import { USER_LOGGED_IN } from '../../actions'


export function* sendLoginInformationToServer(username, password) {
    try {
        const response = yield axios.post(`localhost:3000/v1/users/login`, {
            username,
            password,
        })
        return { type: USER_LOGGED_IN, user: response.data }
    } catch (error) {
        if (!error.response) {
            const newErrorObj = { message: 'Network Error, Please check your connection!', type: 'error' }
            throw newErrorObj
        } else {
            const newErrorObj = {
                message: 'Your email and/or password do not match! Please try again.',
                type: 'error',
                code: error.response.data.errorCode,
            }
            throw newErrorObj
        }
    }
}
