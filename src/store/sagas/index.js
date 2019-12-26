import {fork} from 'redux-saga/effects'
import {fetchBannerListFlow, fetchREcommendListFLow} from './recommendSaga'

export default function* rootSaga() {
    yield fork(fetchBannerListFlow)
    yield fork(fetchREcommendListFLow)
}
