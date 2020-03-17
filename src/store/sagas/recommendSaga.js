import {put, call, take} from 'redux-saga/effects'
import {fromJS} from 'immutable'
import {getBanner, getRecommendList} from '@api/request'
import {actionTypes as recommendActionTypes} from '../reducers/recommend'
import {actionTypes as homeActionTypes} from "../reducers/home";

function* fetchBannerData() {
    try {
        yield put({type: homeActionTypes.FETCH_START})
        const data = yield call(getBanner),
            {code, banners} = data
        if (+code === 200 && banners) {
            return banners
        }
    } catch (e) {
        console.log(e);
    }finally {
        yield put({type: homeActionTypes.FETCH_END})
    }
}

export function* fetchBannerListFlow() {
    try {
        yield take(recommendActionTypes.FETCH_BANNER)
        const data = yield call(fetchBannerData)
        if (data) {
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
        yield put({type: homeActionTypes.FETCH_START})
        const data = yield call(getRecommendList),
            {code, result} = data
        if (+code === 200 && !!result) {
            return result
        }
    } catch (e) {

    }finally {
        yield put({type: homeActionTypes.FETCH_END})
    }
}

export function* fetchRecommendListFLow() {
    try {
        yield take(recommendActionTypes.FETCH_RECOMMEND_LIST)
        const data = yield call(fetchRecommend)
        if (!!data) {
            yield put({
                type: recommendActionTypes.UPDATE_RECOMMEND_LIST,
                data: fromJS(data)
            })
        }
    } catch (e) {

    }
}
