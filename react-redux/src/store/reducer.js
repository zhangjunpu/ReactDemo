import { ADD_NUMBER, SUB_NUMBER } from "./constants";

// 默认state
const defState = {
    counter: 0
}

export default function reduce(state = defState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        case SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }
        default:
            return state;
    }
}