import UserActionType from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.GOOGLE_SINGIN_SUCCESS:
		case UserActionType.EMAIL_SINGIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			};

		case UserActionType.GOOGLE_SINGIN_FAILURE:
		case UserActionType.EMAIL_SINGIN_FAILURE:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
