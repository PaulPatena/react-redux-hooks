import {SIGN_IN, SIGN_OUT} from '../actions/actionTypes'

const loginReducer = (state = false, action) => {
    switch (action.type) {
        case SIGN_IN: return true;
        case SIGN_OUT: return false;
        default: return false;
    }
}
 export default loginReducer;
 