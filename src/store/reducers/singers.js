import {fromJS} from 'immutable'

const initState = fromJS({
    hotSingerList: [], // 热门歌手列表
    singerList: [], //歌手列表
    page: 1 // 页数
})

export const actionTypes = {
    FETCH_HOT_SINGER: 'FETCH_HOT_SINGER',

    UPDATE_SINGER_LIST: 'UPDATE_SINGER_LIST',
    CHANGE_PAGE: 'CHANGE_PAGE'
}

export const actions = {
    fetchHotSinger: count => ({
        type:
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
    }
}
