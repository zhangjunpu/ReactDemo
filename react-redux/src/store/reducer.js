import { combineReducers } from 'redux'
import { reducer as counterRecuder } from './counter'
import { reducer as recommendReducer } from './recommend'

/**
 * 自己实现的 reducer
 */
// export default function reduce(state = {}, action) {
//     return {
//         counterInfo: counterRecuder(state.counterInfo, action),
//         recommendInfo: recommendReducer(state.recommendInfo, action),
//     };
// }

/**
 * 系统定义好的函数
 */
export default combineReducers({
    counterInfo: counterRecuder,
    recommendInfo: recommendReducer,
});