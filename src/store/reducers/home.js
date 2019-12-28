import {fromJS} from 'immutable'

const initState = fromJS({
    isFetching: false
})

export const actionTypes = {
    FETCH_START: 'FETCH_START',
    FETCH_END: 'FETCH_END'
}

export const actions = {}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_START:
            return state.set('isFetching', true)
        case actionTypes.FETCH_END:
            return state.set('isFetching', false)
        default:
            return state
    }
}
