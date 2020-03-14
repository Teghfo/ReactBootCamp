import React from "react";
import "./App.css";
import ParentMemoTest from "./UseMemoTest";
import UseRefTest, { Timer } from "./UseRefTest";
import ForwardRefTest from "./ForwardRefTest";
import RouteTest from "./RouteTest";
function App() {
  return (
    <div className="App">
      {/* <ParentMemoTest /> */}
      {/* <UseRefTest /> */}
      {/* <Timer /> */}
      {/* <ForwardRefTest /> */}
      <RouteTest />
    </div>
  );
}

export default App;
