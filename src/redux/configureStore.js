import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import AuthReducer from './Auth';
import ViewReducer from './view';
import RentalCars from './rent';
import CarsReducer from './cars';

const middlewares = [thunk];

const reducer = combineReducers({
  AuthReducer,
  ViewReducer,
  RentalCars,
  CarsReducer,
});

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
