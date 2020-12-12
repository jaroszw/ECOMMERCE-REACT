import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import { CartContext } from '../../providers/cart/cart.provider';

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => {
//   console.log("MSTP Cart Icon");
//   return {
//     itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => {
//       console.log("running method without state chaneg");
//       return accumulatedQuantity + cartItem.quantity;
//     }, 0),
//   };
// };

export default CartIcon;
