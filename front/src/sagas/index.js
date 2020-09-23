import { all } from 'redux-saga/effects'
import { watchUserAuthentication } from '../components/login/sagas'

export default function* rootSaga() {
    yield all([
        ...watchUserAuthentication(),
    ])
}
