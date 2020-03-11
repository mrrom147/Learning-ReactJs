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

const CollectOverviewWithSpinner = WithSpinner(CollectOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollection } = this.props;
		const collectionRef = firestore.collection("collections");

		collectionRef.get().then(async snapshot => {
			const collectionMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollection(collectionMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectOverviewWithSpinner
							isLoading={this.state.loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={"/shop/:collectionId"}
					render={props => (
						<CollectionPageWithSpinner
							isLoading={this.state.loading}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollection: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
