import React from "react";

const Collection = ({ title, items }) => (
  <div>
    <h1>{title}</h1>
    {items.map(({ id, name, imageUrl, price }) => (
      <div key={id}>
        <div className="shop-item">
          <div>
            <img src={imageUrl} alt={name} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Collection;
