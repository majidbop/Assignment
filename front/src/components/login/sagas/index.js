import { put, takeEvery } from 'redux-saga/effects'
import {
    USER_AUTHENTICATION_REQUEST,
} from '../actions'
import {
    sendLoginInformationToServer,
} from './apis'

export function* userAuthentication(action) {
    try {
        yield put(yield sendLoginInformationToServer(action.username, action.password))
    } catch (error) {
        console.error(error)
    }
}
export function* watchUserAuthentication() {
    yield takeEvery(USER_AUTHENTICATION_REQUEST, userAuthentication)
}
