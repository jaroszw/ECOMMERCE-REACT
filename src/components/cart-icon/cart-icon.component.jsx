import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
