import { combineReducers } from "redux";
import setFilterReducer from "./filterReducer";
import todoReducer from "./todoReducer";

export default combineReducers({
  filterName: setFilterReducer,
  todos: todoReducer
});
