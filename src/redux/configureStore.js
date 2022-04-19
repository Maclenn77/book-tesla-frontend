import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import AuthReducer from './Auth';

const middlewares = [thunk];

const reducer = combineReducers({
  AuthReducer,
});

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
