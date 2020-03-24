import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} from "../actions/actionTypes";

const todoReducer = (state = [], action) => {
  // Optimize!!!
  const newState = state.map(todo => {
    return { ...todo };
  });
  switch (action.type) {
    case ADD_TODO:
      if (action.name) {
        return [
          ...newState,
          {
            name: action.name,
            id: action.id,
            date: new Date(action.date).toLocaleDateString("fa-IR"),
            done: false
          }
        ];
      } else {
        return newState;
      }
    case EDIT_TODO:
      if (action.name) {
        return newState.map(todo =>
          todo.id === action.id ? { ...todo, name: action.name } : todo
        );
      } else {
        return newState;
      }
    case TOGGLE_TODO:
      return newState.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      console.log(action.id);
      return newState.filter(todo => todo.id !== action.id);
    default:
      return newState;
  }
};

export default todoReducer;
