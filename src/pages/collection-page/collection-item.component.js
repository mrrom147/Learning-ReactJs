import React from "react";
import "./collection-item.style.scss";

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="shop-item">
    <div className="shop-item-img-wrap">
      <div
        className="shop-item-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
    <h2>{name}</h2>
  </div>
);

export default CollectionItem;
