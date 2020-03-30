import React from "react";
import "./App.css";
import Todos from "./components";
import { Provider } from "react-redux";
import store from "./store";
import TodosCount from "./components/TodosCount";
import FetchedTodos from "./components/FetchedTodos";
import Counter from "./components/Counter";
import { TestUseReducer } from "./hookReducer/testUseReducer";
import { CounterTwo } from "./hookReducer/countertwo";
import { App as AppCounter } from "./hookReducer/App";
function App() {
  return (
    // <Provider store={store}>
    //   <CounterTwo />
    //   <Todos />
    //   <TodosCount />
    //   <Counter />
    //   <FetchedTodos />
    // </Provider>
    // <>
    //   <TestUseReducer />
    //   <hr />
    //   <CounterTwo />
    // </>
    <AppCounter />
  );
}

export default App;
