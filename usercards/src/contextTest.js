import React from "react";
import UserContext from "./context/context1";

function UserList() {
  return (
    <div>
      <UserContext.Provider value={"jasem"}>
        <UserList1 />
      </UserContext.Provider>
    </div>
  );
}

function UserList1() {
  return (
    <div>
      <UserContext.Provider value={"jafar"}>
        <UserCard />
      </UserContext.Provider>
    </div>
  );
}

function UserCard(props) {
  return (
    <div>
      <UserSelfCard />
    </div>
  );
}

class UserSelfCard extends React.Component {
  static contextType = UserContext;

  render() {
    return <div>{this.context}</div>;
  }
}

class UserSelfCardTest extends React.Component {
  static contextType = UserContext;
  render() {
    return <div>{this.context}</div>;
  }
}

export default UserList1;

// UserSelfCard.contextType = UserContext;
