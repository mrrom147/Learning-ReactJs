import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>Checkout</CustomButton>
        {cartItems.map(item)}
    </div>
);

const mapStateToProps = state => ({
    cartItems:  state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);