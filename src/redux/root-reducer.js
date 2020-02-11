import { combineReduceers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReduceers({
    user: userReducer
});