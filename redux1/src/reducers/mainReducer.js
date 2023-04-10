import {combineReducers} from 'redux';
import films from './MovieReducer';

//declare all the reducers
const rootReducer = combineReducers({
    films
})

export default rootReducer;