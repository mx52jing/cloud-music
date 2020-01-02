import {put, call, take} from 'redux-saga/effects'
import {fromJS} from 'immutable'
import {getHotSingerListRequest, getSingerListRequest} from '@api/request'
import {actionTypes as homeActionTypes} from "../reducers/home";
import {actionTypes as singersActionTypes} from "../reducers/singers";

function* fetchHotSingerList(count) {
    try {
        yield put({type: homeActionTypes.FETCH_START})

    }catch (e) {
        console.log(e);
    }finally {
        yield put({type: homeActionTypes.FETCH_END})
    }
}

export function* hotSingerFlow() {
    try {
        yield take(singersActionTypes.UPDATE_SINGER_LIST)
        yield call(fetchHotSingerList)
    }catch (e) {
        console.log(e);
    }
}

function* fetchSinger() {
    try {
        yield put({type: homeActionTypes.FETCH_START})

    }catch (e) {
        console.log(e);
    }finally {
        yield put({type: homeActionTypes.FETCH_END})
    }
}
