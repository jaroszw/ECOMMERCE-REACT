import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer'

// SETUP ZGODNIE Z KURSEM - BRAK REDUXA W CONSOLI
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))
export default store;

// SETUP ZGODNIE Z DOKUMNTACJĄ REDUX DEVTOOLS - MIDDLEWARES I REDUX DEVTOOLS 
// const middleware = [logger];
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// );
// const store = createStore(rootReducer, enhancer);
// export default store;