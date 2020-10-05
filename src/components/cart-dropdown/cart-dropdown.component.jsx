import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item.component/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem.id} item={cartItem} />;
      })}
    </div>
    <CustomButton>
      {console.log("DORPDOWN MENU RENDER")}GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

// const mapStateToProps = ({ cart: { cartItems } }) => {
//   console.log("MTS Dropdown");
//   return {
//     cartItems,
//   };
// };

export default connect(mapStateToProps)(CartDropdown);
