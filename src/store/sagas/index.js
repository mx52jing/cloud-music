import {fork} from 'redux-saga/effects'

export default function* rootSaga() {
    yield console.log('hello saga')
}
