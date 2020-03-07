import React, { useState, useContext } from "react";
import UserContext, { ThemeContext } from "./context/context1";

function UserList() {
  return (
    <div>
      <UserContext.Provider value={"jasem"}>
        <UserList1 />
      </UserContext.Provider>
    </div>
  );
}

function UserList1(props) {
  const [user, setUser] = useState("jafar");
  const [color, setColor] = useState("green");

  const handleUser = () => {
    setUser("Sakineh");
  };

  return (
    <div>
      <ThemeContext.Provider value={color}>
        <UserContext.Provider
          value={{ user: props.user, handleUser: handleUser }}
        >
          <UserCard />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

function UserCard(props) {
  console.log("userCard");
  return (
    <div>
      <HookUserContext />
    </div>
  );
}

class UserSelfCard extends React.Component {
  // static contextType = UserContext;

  render() {
    return (
      <div>
        <UserContext.Consumer>
          {context => (
            <ThemeContext.Consumer>
              {color => {
                return (
                  <div>
                    {context.user} - {color}
                    <button onClick={context.handleUser}>change User</button>
                  </div>
                );
              }}
            </ThemeContext.Consumer>
          )}
        </UserContext.Consumer>
        <ThemeContext.Consumer>
          {color => {
            return <div>{color}</div>;
          }}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

function HookUserContext() {
  const user = useContext(UserContext);
  const color = useContext(ThemeContext);
  return (
    <div>
      {user.user} - {color}
    </div>
  );
}

class UserSelfCardTest extends React.Component {
  static contextType = UserContext;
  render() {
    return <div>{this.context}</div>;
  }
}

export default UserList1;

// UserSelfCard.contextType = UserContext;
