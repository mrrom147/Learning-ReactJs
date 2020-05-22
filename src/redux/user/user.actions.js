import UserActionType from "./user.types";

export const setCurrentUser = user => ({
	type: "SET_CURRENT_USER",
	payload: user
});

export const googleSigninStart = () => ({
	type: UserActionType.GOOGLE_SINGIN_START
});

export const googleSigninSuccess = user => ({
	type: UserActionType.GOOGLE_SINGIN_SUCCESS,
	payload: user
});

export const googleSigninFailure = error => ({
	type: UserActionType.GOOGLE_SINGIN_FAILURE,
	payload: error
});

export const emailSigninStart = emailAndPassword => ({
	type: UserActionType.EMAIL_SINGIN_START,
	payload: emailAndPassword
});

export const emailSigninSuccess = user => ({
	type: UserActionType.EMAIL_SINGIN_SUCCESS,
	payload: user
});

export const emailSigninFailure = error => ({
	type: UserActionType.EMAIL_SINGIN_FAILURE,
	payload: error
});