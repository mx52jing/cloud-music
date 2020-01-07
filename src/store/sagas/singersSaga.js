import {put, call, take} from 'redux-saga/effects'
import {fromJS} from 'immutable'
import {getHotSingerListRequest, getSingerListRequest} from '@api/request'
import {actionTypes as homeActionTypes} from "../reducers/home";
import {actionTypes as singersActionTypes} from "../reducers/singers";

const fetchTypeMap = new Map([
    ['hot', getHotSingerListRequest],
    ['normal', getSingerListRequest]
])

function* fetchSingerList({fetchType, ...params}) {
    try {
        yield put({type: homeActionTypes.FETCH_START})
        const cb = fetchTypeMap.get(fetchType)
        const data = yield call(cb, {...params}),
            {code, artists} = data
        if (+code === 200) {
            return artists
        }
    }catch (e) {

    }finally {
        yield put({type: homeActionTypes.FETCH_END})
    }
}

export function* fetchSingerListWatcher() {
    while (true) {
        try {
            const {params} = yield take(singersActionTypes.FETCH_SINGER_LIST)
            const list = yield call(fetchSingerList, params)
            if (!!list) {
                yield put({
                    type: singersActionTypes.UPDATE_SINGER_LIST,
                    data: fromJS(list)
                })
            }
        }catch (e) {

        }
    }
}