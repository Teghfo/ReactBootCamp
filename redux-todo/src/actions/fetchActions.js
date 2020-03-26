import {
  FETCH_TODO_ERROR,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_REQUEST
} from "./actionTypes";
import axios from "axios";

export const fetchTodoRequest = () => {
  return {
    type: FETCH_TODO_REQUEST
  };
};

export const fetchTodoSuccess = fetchedTodos => {
  return {
    type: FETCH_TODO_SUCCESS,
    payload: fetchedTodos
  };
};

export const fetchTodoError = err => {
  return {
    type: FETCH_TODO_ERROR,
    payload: err
  };
};

export const fetchTodo = () => {
  return dispatch => {
    dispatch(fetchTodoRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => dispatch(fetchTodoSuccess(res.data)))
      .catch(err => dispatch(fetchTodoError(err.message)));
  };
};
