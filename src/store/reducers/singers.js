import {fromJS} from 'immutable'

const initState = fromJS({
    singerData: {
        artists: []
    }, // 相关歌手数据
    page: 0 // 页数
})

export const actionTypes = {
    FETCH_SINGER_DATA: 'FETCH_SINGER_DATA',
    UPDATE_SINGER_DATA: 'UPDATE_SINGER_DATA',
    CHANGE_PAGE: 'CHANGE_PAGE'
}

export const actions = {
    fetchSingerData: params => ({
      type: actionTypes.FETCH_SINGER_DATA,
      params
    }),
    updateSingerList: data => ({
        type: actionTypes.UPDATE_SINGER_DATA,
        data
    }),
    changePage: page => ({
        type: actionTypes.CHANGE_PAGE,
        page
    })
}

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_SINGER_DATA:
            return state.set('singerData', action.data)
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}
