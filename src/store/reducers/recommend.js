import {fromJS} from 'immutable'

const initState = fromJS({
    bannerList: [],
    recommendList: []
})

export const actionTypes = {
    FETCH_BANNER: 'FETCH_BANNER',
    FETCH_RECOMMEND_LIST: 'FETCH_RECOMMEND_LIST',
    UPDATE_BANNER: 'UPDATE_BANNER_BANNER',
    UPDATE_RECOMMEND_LIST: 'UPDATE_RECOMMEND_LIST'
}

export const actions = {
    fetch_banner: _ => ({type: actionTypes.FETCH_BANNER}),
    fetch_recommend: _ => ({type: actionTypes.FETCH_RECOMMEND_LIST}),
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_BANNER:
            return state.set('bannerList', action.data);
        case actionTypes.UPDATE_RECOMMEND_LIST:
            return state.set('recommendList', action.data);
        default:
            return state;
    }
}
