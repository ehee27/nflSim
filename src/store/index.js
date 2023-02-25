import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import teams from './team';
import divisions from './division';

const reducer = combineReducers({
  teams,
  divisions,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './team';
export * from './division';
