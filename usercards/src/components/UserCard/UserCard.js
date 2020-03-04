import React from "react";
import UserSelfCard from "./UserSelfCard";

const UserCard = props => {
  console.log(props);
  // return null;
  return <UserSelfCard users={props.myuser} />;
};

export default UserCard;
