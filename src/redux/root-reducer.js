import { combineReducers } from "redux";
<<<<<<< HEAD
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducers";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

=======

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducers";
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'dupa',
  storage,
  whiteList: ['cart']
}

>>>>>>> testing
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
<<<<<<< HEAD
  shop: shopReducer,
=======
  shop: shopReducer
>>>>>>> testing
});

export default persistReducer(persistConfig, rootReducer);
