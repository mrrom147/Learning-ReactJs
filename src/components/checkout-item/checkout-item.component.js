import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({item: {name, imageUrl, price, quantity}}) => (
    <div className="checkout-item">
        <div className="image-container"><img src={imageUrl} alt={name}/></div>
        <div className="name">{name}</div>
        <div className="quantity">
            <span>&#10096;</span>
            {quantity}
            <span>&#10097;</span>
        </div>
        <div className="price">${price}</div>
        <div className="remove-button">&#10005;</div>
    </div>
);

export default CheckoutItem;