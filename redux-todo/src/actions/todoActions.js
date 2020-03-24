import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO } from "./actionTypes";

let id = 0;
export const addTodo = name => ({
  type: ADD_TODO,
  id: id++,
  name,
  date: Number(new Date())
});

export const removeTodo = id => {
  console.log(id);
  return {
    type: REMOVE_TODO,
    id
  };
};

export const editTodo = (id, newName) => ({
  type: EDIT_TODO,
  id,
  name: newName
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
