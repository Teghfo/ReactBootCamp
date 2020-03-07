import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import UserList from "./components/UserList/UserList";
import UserList1 from "./contextTest";
import Theme from "./Theme";
import { ComponentA } from "./context/context1";
import { NewByClick, NewByMouse } from "./CounterTestHoc";

export function Transfer(props) {
  const [state, setstate] = useState("initialState");
  const chidren = props.children;
  return <div>{chidren}</div>;
}

function App() {
  return (
    <div className="App">
      {/* <Theme /> */}
      {/* <UserList1 /> */}
      {/* <ComponentA /> */}
      {/* <Transfer>
        <UserList1 />
        <h1>ashkan</h1>
        <p>Mapsa</p>
      </Transfer> */}

      <NewByClick user="ashkan" />
      <NewByMouse user="Sakineh" />
    </div>
  );
}

export default App;
