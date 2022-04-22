import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const middlewares = [thunk];

const reducer = combineReducers({});

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
