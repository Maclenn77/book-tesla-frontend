import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import AuthReducer from './Auth';
import ViewReducer from './view';

const middlewares = [thunk];

const reducer = combineReducers({
  AuthReducer,
  ViewReducer,
});

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
