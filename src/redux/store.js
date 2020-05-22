import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sageMiddleware = createSagaMiddleware();

const middleware = [sageMiddleware];

if(process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sageMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
