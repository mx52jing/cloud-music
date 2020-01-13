import {fromJS} from 'immutable'

const initState = fromJS({
    rankList: []
})

export const actionTypes = {
    FETCH_RANK_LIST: 'FETCH_RANK_LIST',
    UPDATE_RANK_LIST: 'UPDATE_RANK_LIST'
}

export const actions = {
    fetchRankList: () => ({type: actionTypes.FETCH_RANK_LIST}),
    updateRankList: data => ({
        type: actionTypes.UPDATE_RANK_LIST,
        data
    })
}

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_RANK_LIST:
            return state.set('rankList', action.data)
        default:
            return state
    }
}
