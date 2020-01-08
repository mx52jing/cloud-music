import {put, call, take, select} from 'redux-saga/effects'
import {fromJS} from 'immutable'
import {getHotSingerListRequest, getSingerListRequest} from '@api/request'
import {actionTypes as homeActionTypes} from "../reducers/home";
import {actionTypes as singersActionTypes} from "../reducers/singers";

const fetchTypeMap = new Map([
    ['hot', getHotSingerListRequest],
    ['normal', getSingerListRequest]
])

function* fetchSingerList({fetchType, isAppend, ...params}) {
    try {
        yield put({type: homeActionTypes.FETCH_START})
        const cb = fetchTypeMap.get(fetchType)
        const data = yield call(cb, {...params}),
            {code, artists, more} = data
        if (+code === 200 && !isAppend) {
            return {more, artists}
        }
        let oldList = yield select(state => state.getIn(['singer', 'singerData', 'artists']))
        oldList = oldList ? oldList.toJS() : []
        return {more, artists: [...oldList, ...artists]}
    }catch (e) {
        console.log(e);
    }finally {
        yield put({type: homeActionTypes.FETCH_END})
    }
}

export function* fetchSingerListWatcher() {
    while (true) {
        try {
            const {params} = yield take(singersActionTypes.FETCH_SINGER_DATA)
            const data = yield call(fetchSingerList, params)
            if (!!data) {
                yield put({
                    type: singersActionTypes.UPDATE_SINGER_DATA,
                    data: fromJS(data)
                })
            }
        }catch (e) {

        }
    }
}
