import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
	firestore,
	convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utity";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectOverview from "../../components/collect-overview/collect-overview.component";
import CollectionPage from "../collection/collection.component";

class ShopPage extends React.Component {
	state = {
		loading: true
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollection } = this.props;
		const collectionRef = firestore.collection("collections");

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			const collectionMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollection(collectionMap);
		});
	}

	render() {
		const { match } = this.props;

		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectOverview} />
				<Route path={"/shop/:collectionId"} component={CollectionPage} />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollection: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
