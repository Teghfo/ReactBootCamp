import React from "react";
import "./App.css";
import Todos from "./components";
import { Provider } from "react-redux";
import store from "./store";
import TodosCount from "./components/TodosCount";
import FetchedTodos from "./components/FetchedTodos";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <Todos />
      <TodosCount />
      <Counter />
      <FetchedTodos />
    </Provider>
  );
}

export default App;
