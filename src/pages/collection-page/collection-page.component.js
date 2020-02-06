import React from "react";
import CollectionItem from "./collection-item.component";
import "./collection-page.style.scss";

const Collection = ({ title, items }) => (
  <div>
    <h1>{title}</h1>
    <div className="collect-list">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...data }) => (
          <CollectionItem key={id} {...data} />
        ))}
    </div>
  </div>
);

export default Collection;
