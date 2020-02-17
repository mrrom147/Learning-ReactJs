import React from "react";
import { connect } from "react-redux";

import { clearCartItem, addItem, removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({item, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = item;

    return (
        <div className="checkout-item">
            <div className="image-container"><img src={imageUrl} alt={name}/></div>
            <div className="name">{name}</div>
            <div className="quantity">
                <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
            </div>
            <div className="price">${price}</div>
            <div className="remove-button" onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);