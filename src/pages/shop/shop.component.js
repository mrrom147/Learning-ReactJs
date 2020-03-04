import React from "react";
import { Route } from "react-router-dom";

import CollectOverview from "../../components/collect-overview/collect-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectOverview} />
		<Route path={"/shop/:collectionId"} component={CollectionPage} />
	</div>
);

export default ShopPage;
