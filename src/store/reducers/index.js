import {combineReducers} from 'redux-immutable'
import { reducer as recommendReducer } from "./recommend";

export default combineReducers({
    recommend: recommendReducer
})
