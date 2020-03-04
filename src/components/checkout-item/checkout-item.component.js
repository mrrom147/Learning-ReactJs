import React from "react";
import { connect } from "react-redux";

import { clearCartItem, addItem, removeItem } from "../../redux/cart/cart.actions";

import { TextContainer, CheckoutItemContainer, ImageContainer, QuantityContainer, RemoveButtonContainer } from "./checkout-item.styles";

const CheckoutItem = ({item, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = item;

    return (
        <CheckoutItemContainer>
            <ImageContainer><img src={imageUrl} alt={name}/></ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(item)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(item)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>${price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(item)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);