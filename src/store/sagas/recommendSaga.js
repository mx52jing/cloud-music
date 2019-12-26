import {put, call, take } from 'redux-saga/effects'
import {actionTypes as recommendActionTypes} from '../reducers/recommend'
import {fromJS} from 'immutable'
import {getBanner, getRecommendList} from '@api/request'

function* fetchBannerData() {
    try {
        const data = yield call(getBanner),
            { code, banners } = data
        if(+code === 200 && banners) {
            return banners
        }
    }catch (e) {
        console.log(e);
    }
}

export function* fetchBannerListFlow() {
    try {
        yield take(recommendActionTypes.FETCH_BANNER)
        const data = yield call(fetchBannerData)
        if(data) {
            yield put({
                type: recommendActionTypes.UPDATE_BANNER,
                data: fromJS(data)
            })
        }
    } catch (e) {
        console.log(e);
    }
}

function* fetchRecommend() {
    try {
       const data = yield call(getRecommendList)
        debugger
        if(!!data) {
            return data
        }
    }catch (e) {

    }
}

export function* fetchREcommendListFLow() {
    try {
        yield take(recommendActionTypes.FETCH_RECOMMEND_LIST)
        debugger
        const data = yield call(fetchRecommend)
        if(!!data) {
            yield put({
                type: recommendActionTypes.UPDATE_RECOMMEND_LIST,
                data: fromJS(data)
            })
        }
    }catch (e) {

    }
}
