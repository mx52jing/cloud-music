import {fork} from 'redux-saga/effects'
import {fetchBannerListFlow, fetchREcommendListFLow} from './recommendSaga'
import {fetchSingerListWatcher} from "./singersSaga";

export default function* rootSaga() {
    yield fork(fetchBannerListFlow)
    yield fork(fetchREcommendListFLow)
    yield fork(fetchSingerListWatcher)
}
