import {put, call, take} from 'redux-saga/effects'
import {fromJS} from 'immutable'
import {getHotSingerListRequest, getSingerListRequest} from '@api/request'
import {actionTypes as homeActionTypes} from "../reducers/home";
import {actionTypes as singersActionTypes} from "../reducers/singers";

function* fetchHotSingerList(page) {
    try {
        yield put({type: homeActionTypes.FETCH_START})
        const data = yield call(getHotSingerListRequest, page),
            {code, artists} = data
        if (+code === 200) {
            return artists
        }
    } catch (e) {
        console.log(e);
    } finally {
        yield put({type: homeActionTypes.FETCH_END})
    }
}

export function* hotSingerFlow() {
    try {
        const {page} = yield take(singersActionTypes.FETCH_HOT_SINGER)
        const list = yield call(fetchHotSingerList, page)
        if (!!list) {
            yield put({
                type: singersActionTypes.UPDATE_SINGER_LIST,
                data: list
            })
        }
    } catch (e) {
        console.log(e);
    }
}

function* fetchSinger({category, initials, count}) {
    try {
        yield put({type: homeActionTypes.FETCH_START})
        const data = yield call(getSingerListRequest, category, initials, 0),
            {code, artists} = data
        if (+code === 200) {
            return artists
        }
    } catch (e) {
        console.log(e);
    } finally {
        yield put({type: homeActionTypes.FETCH_END})
    }
}

export function* fetchSingerWatcher() {
    while (true) {
        try {
            const {data} = yield take(singersActionTypes.FETCH_SINGERS)
            const list = yield call(fetchSinger, {...data})
            if(!!list) {
                yield put({
                    type: singersActionTypes.UPDATE_SINGER_LIST,
                    data: list
                })
            }
        } catch (e) {

        }
    }
}
