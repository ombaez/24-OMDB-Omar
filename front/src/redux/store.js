import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import moviesReducer from './reducers/movies-reducer';
import userReducer from './reducers/user-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ movies: moviesReducer, user: userReducer })

export default createStore(reducer, composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)));