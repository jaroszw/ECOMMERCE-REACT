import { createStore, applyMiddleware } from 'redux';
import combineReducers from './root-reducer';
import logger from 'redux-logger';

function saveToLocalStorage(state) {
  try {
    const serlializedState = JSON.stringify(state.cart);
    console.log(serlializedState);
    localStorage.setItem('state', serlializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serlializedState = localStorage.getItem('state');
    if (serlializedState === null) return undefined;
    return JSON.parse(serlializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistState = loadFromLocalStorage();

const middlewares = [logger];
const store = createStore(
  combineReducers,
  persistState,
  applyMiddleware(...middlewares)
);

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
