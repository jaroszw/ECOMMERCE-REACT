import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducers";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
