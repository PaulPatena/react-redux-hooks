import {INCREMENT, DECREMENT, SIGN_IN, SIGN_OUT} from './actionTypes'

// By default, increment action by 1 unit
export const increment = (amount=1) => {
    return {
        type: INCREMENT,
        payload: amount,
    }
}

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}

export const signIn = () => ({type: SIGN_IN})
export const signOut = () => ({type: SIGN_OUT})
 