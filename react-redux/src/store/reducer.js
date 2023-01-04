import {
    ADD_NUMBER,
    SUB_NUMBER,
    RECOMMEND,
} from "./constants";

// 默认state
const defState = {
    counter: 0,
    recommends: [],
}

export default function reduce(state = defState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num };
        case SUB_NUMBER:
            return { ...state, counter: state.counter - action.num };
        case RECOMMEND:
            return { ...state, recommends: action.recommends };
        default:
            return state;
    }
}