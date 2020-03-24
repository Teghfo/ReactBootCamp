import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

let middleware = [thunk];
const store = createStore(rootReducer, [...middleware]);

export default store;
