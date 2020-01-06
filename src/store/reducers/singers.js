import {fromJS} from 'immutable'

const initState = fromJS({
    singerList: [], //歌手列表
    page: 1 // 页数
})

export const actionTypes = {
    FETCH_HOT_SINGER: 'FETCH_HOT_SINGER',
    FETCH_SINGERS: 'FETCH_SINGERS',
    UPDATE_SINGER_LIST: 'UPDATE_SINGER_LIST',
    CHANGE_PAGE: 'CHANGE_PAGE'
}

export const actions = {
    fetchHotSingers: (page = 0 ) => ({
        type: actionTypes.FETCH_HOT_SINGER,
        page
    }),
    fetchSingers: data => ({
        type: actionTypes.FETCH_SINGERS,
        data
    }),
    updateSingerList: data => ({
        type: actionTypes.UPDATE_SINGER_LIST,
        data
    }),
    changePage: page => ({
        type: actionTypes.CHANGE_PAGE,
        page
    })
}

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_SINGER_LIST:
            return state.set('singerList', action.data)
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}
