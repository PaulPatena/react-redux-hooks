import counterReducer from './counter'
import loggedReducer from './isLogged'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    // counter: counterReducer, // optionally you can mapping reducers to export name
    // or use ES6 syntactic sugar of counterReducer (internally equivalent to counterReducer: counterReducer)
    // counterReducer,
    // loggedReducer, 
    counter: counterReducer,
    isLogged: loggedReducer,
})

export default allReducers;
