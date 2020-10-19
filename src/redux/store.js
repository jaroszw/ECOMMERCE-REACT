import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';
<<<<<<< HEAD
import { persistStore } from 'redux-persist';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
=======
import {persistStore} from 'redux-persist';

const middlewares = [logger];

export const store = createStore(combineReducers, applyMiddleware(...middlewares));
export const persistor = persistStore(store)

>>>>>>> testing
