import {combineReducers} from 'redux-immutable'
import {reducer as recommendReducer} from "./recommend"
import {reducer as homeReducer} from "./home";

export default combineReducers({
    recommend: recommendReducer,
    home: homeReducer
})
