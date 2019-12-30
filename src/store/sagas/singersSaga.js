import {put, call, take} from 'redux-saga/effects'
import {fromJS} from 'immutable'
import {getHotSingerListRequest, getRecommendList} from '@api/request'
import {actionTypes as homeActionTypes} from "../reducers/home";
import {actionTypes as singersActionTypes} from "../reducers/singers";

function* fetchSingerList() {
    try {
        yield put({type: homeActionTypes.FETCH_START})

    }catch (e) {

    }finally {
        yield put({type: homeActionTypes.FETCH_END})
    }
}
export function* singerFlow() {
    try {
        yield take(singersActionTypes.UPDATE_SINGER_LIST)
        yield call(fetchSingerList)
    }catch (e) {
        console.log(e);
    }
}
