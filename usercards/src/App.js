import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import UserList from "./components/UserList/UserList";
import UserList1 from "./contextTest";
import Theme from "./Theme";
function App() {
  return (
    <div className="App">
      <Theme />
      <UserList1 />
      {/* <UserSelfCardTest /> */}
    </div>
  );
}

export default App;
