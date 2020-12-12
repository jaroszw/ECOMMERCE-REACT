import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CartContext from '../../context/cart/cart.context';

const CartIcon = ({ itemCount }) => {
  const { toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

// const mapStateToProps = ({ cart: { cartItems } }) => {
//   console.log("MSTP Cart Icon");
//   return {
//     itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => {
//       console.log("running method without state chaneg");
//       return accumulatedQuantity + cartItem.quantity;
//     }, 0),
//   };
// };

export default connect(mapStateToProps)(CartIcon);
