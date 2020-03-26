import { combineReducers } from "redux";
import setFilterReducer from "./filterReducer";
import todoReducer from "./todoReducer";
import { fetchReducer } from "./fetchReducer";

export default combineReducers({
  filterName: setFilterReducer,
  todos: todoReducer,
  fetchedTodos: fetchReducer
});
