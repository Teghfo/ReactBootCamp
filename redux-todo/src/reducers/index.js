import { combineReducers } from "redux";
import setFilterReducer from "./filterReducer";
import todoReducer from "./todoReducer";
import { fetchReducer } from "./fetchReducer";
import counterReducer from "./counterReducer";

export default combineReducers({
  filterName: setFilterReducer,
  todos: todoReducer,
  fetchedTodos: fetchReducer,
  count: counterReducer
});
