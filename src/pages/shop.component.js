import React from "react";
import { Link } from "react-router-dom";
import SHOP_DATA from "./shop.data";
import Collection from "./collection-page/collection-page.component";

class Shoppage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        <h1>Shop page</h1>
        <Link to="/">Home page</Link>

        {collections.map(({ id, ...data }) => (
          <Collection key={id} {...data} />
        ))}
      </div>
    );
  }
}

export default Shoppage;
