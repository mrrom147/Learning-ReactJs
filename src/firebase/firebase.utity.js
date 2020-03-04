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

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
