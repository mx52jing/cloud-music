import {fromJS} from 'immutable'
import {put, call, take} from 'redux-saga/effects'
import {actionTypes as rankActionTypes} from "../reducers/rank";
import {actionTypes as homeActionTypes} from "../reducers/home";
import {getRankListRequest} from '@api/request'

function* fetchRankList() {
    try {
        yield put({type: homeActionTypes.FETCH_START})
        const data = yield call(getRankListRequest),
            {list} = data
        if(!!list) return list
    }catch (e) {
        console.log(e);
    }finally {
        yield put({type: homeActionTypes.FETCH_END})
    }
}

export function* rankWatcher() {
    while(true) {
        try {
            yield take(rankActionTypes.FETCH_RANK_LIST)
            const rankList = yield call(fetchRankList)
            yield put({
                type: rankActionTypes.UPDATE_RANK_LIST,
                data: fromJS(rankList)
            })
        }catch (e) {
            console.log(e);
        }
    }
}
