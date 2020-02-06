import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "./collection-item.component";
import "./collection-page.style.scss";

const Collection = ({ title, items, routeName }) => (
  <div>
    <h1>
      <Link to={routeName}>{title}</Link>
    </h1>
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
