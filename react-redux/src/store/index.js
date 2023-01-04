import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

const storeEnhancer = applyMiddleware(thunk);
const store = legacy_createStore(reducer, storeEnhancer);

export default store;