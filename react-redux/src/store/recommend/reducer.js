import { RECOMMEND } from "./constants";

// 默认state
const initialRecommendState = {
    recommends: [],
}

export default function reduce(state = initialRecommendState, action) {
    switch (action.type) {
        case RECOMMEND:
            return { ...state, recommends: action.recommends };
        default:
            return state;
    }
}