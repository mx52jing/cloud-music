import {fork} from 'redux-saga/effects'
import {fetchBannerListFlow, fetchRecommendListFLow} from './recommendSaga'
import {fetchSingerListWatcher} from "./singersSaga";
import {rankWatcher} from './rankSaga'

export default function* rootSaga() {
    yield fork(fetchBannerListFlow)
    yield fork(fetchRecommendListFLow)
    yield fork(fetchSingerListWatcher)
    yield fork(rankWatcher)
}
