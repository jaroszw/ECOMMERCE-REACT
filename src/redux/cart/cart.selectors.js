import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart], // cart {hidden: true,  cartItems: [],}
  (cart) => cart.cartItems // cach (cart)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulatedQuantity, cartItem) => {
      return accumulatedQuantity + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulatedQuantity, cartItem) => {
    return accumulatedQuantity + cartItem.price * cartItem.quantity;
  }, 0)
);
