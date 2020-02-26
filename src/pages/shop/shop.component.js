import React from "react";
import CollectOverview from "../../components/collect-overview/collect-overview.component";

const ShopPage = ({match}) => (
    <div className="shop-page">
        {console.log(match)}
        <CollectOverview/>
    </div>
);

export default ShopPage;
