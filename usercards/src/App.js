import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    <Router>
      <div className="App">
        <Link to="/about">about</Link>
        <br />
        <Link to="/home">home</Link>
        <br />
        <a href="/home">home a link</a>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />

        <Route path="/" exact component={() => <NewByMouse user="Sakineh" />} />
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
    </Router>
  );
}

export default App;

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
