import {takeLatest, put, all, call} from "redux-saga/effects";

import UserActionType from "./user.types";

import {googleSigninSuccess, googleSigninFailure, emailSigninSuccess, emailSigninFailure} from "./user.actions";

import {auth, googleProvider, createUserProfileDocument} from "../../firebase/firebase.utity";

export function* signInWithGoogle() {
	try {
		const {user} = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(googleSigninSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
	}catch (error) {
		yield put(googleSigninFailure(error));
	}
}

export function* signInWithEmail(email, password) {
	try {
		const {user} = yield auth.signInWithEmailAndPassword(email, password);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(emailSigninSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
	} catch (error) {
		yield put(emailSigninFailure(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionType.GOOGLE_SINGIN_START, signInWithGoogle)
}

export function* userSaga() {
	yield all([call(onGoogleSignInStart)]);
}