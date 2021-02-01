import logo from './logo.svg';
import './App.css';

import { createStore, applyMiddleware } from 'redux';

const reducer = state => state;

const loggerMiddleware = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  console.groupEnd(action.type);

  return next(action);
};

const enhancer = applyMiddleware(loggerMiddleware);

const store = createStore(reducer, enhancer);
