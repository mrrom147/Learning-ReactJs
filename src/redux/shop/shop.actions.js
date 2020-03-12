import ShopActionTypes from "./shop.types";
import {
	convertCollectionsSnapshotToMap,
	firestore
} from "../../firebase/firebase.utity";

export const fetchCollectionStart = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection("collections");
		dispatch(fetchCollectionStart());

		collectionRef
		.get()
		.then(async snapshot => {
			const collectionMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(fetchCollectionSuccess(collectionMap));
		})
		.catch(error => dispatch(fetchCollectionsFailure(error.message)));
	};
};
