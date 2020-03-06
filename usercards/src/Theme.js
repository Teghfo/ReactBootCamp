import React, { Component } from "react";
import UserCard from "./contextTest";
import UserContext from "./context/context1";

export default class Theme extends Component {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ color: "blue" }}>
          <UserCard />
        </UserContext.Provider>
      </div>
    );
  }
}
