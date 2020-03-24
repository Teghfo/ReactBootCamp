import React from "react";
import "./App.css";
import Todos from "./components";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default App;
