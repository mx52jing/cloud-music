import {combineReducers} from 'redux-immutable'
import {reducer as recommendReducer} from "./recommend"
import {reducer as homeReducer} from "./home"
import {reducer as singerReducer} from "./singers";
import {reducer as rankReducer} from './rank'

export default combineReducers({
    recommend: recommendReducer,
    home: homeReducer,
    singer: singerReducer,
    rank: rankReducer
})
