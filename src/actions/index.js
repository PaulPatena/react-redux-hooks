
// By default, increment action by 1 unit
export const increment = (amount=1) => {
    return {
        type: "INCREMENT",
        payload: amount,
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}


 