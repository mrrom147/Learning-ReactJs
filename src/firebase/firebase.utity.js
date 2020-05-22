import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAOz0DLWN3xeqEDXcaJ8FgXZf-IJjOkpeQ",
	authDomain: "learning-reactjs-bb2bf.firebaseapp.com",
	databaseURL: "https://learning-reactjs-bb2bf.firebaseio.com",
	projectId: "learning-reactjs-bb2bf",
	storageBucket: "learning-reactjs-bb2bf.appspot.com",
	messagingSenderId: "795410645615",
	appId: "1:795410645615:web:ce77c1450f8570706dc39a",
	measurementId: "G-HRBS44W4GJ"
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`user/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData
			});
		} catch (e) {
			console.log(e.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collectionSnapshot => {
	const transformedCollection = collectionSnapshot.docs.map(docSnapshot => {
		const { title, items } = docSnapshot.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: docSnapshot.id,
			title,
			items
		}
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {})
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
