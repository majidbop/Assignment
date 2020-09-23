import {
    USER_LOGGED_IN
} from '../actions'
import initialState from '../../../reducer/initialState'

function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                user: Object.assign({}, action.user),
            }
        default:
            return state
    }
}
export default userReducer
