import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";

// REDUCERS
import userReducer from "./features/user/reducer";

// MIDDLEWARE=
const middleware = applyMiddleware(thunk, promise);

const store = createStore(
	combineReducers({
		user: userReducer,
	}),
	middleware
);

export default store;
