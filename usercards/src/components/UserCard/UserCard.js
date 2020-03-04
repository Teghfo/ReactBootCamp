import React from "react";
import UserSelfCard from "./UserSelfCard";
import styles from "./UserCard.module.scss";

const UserCard = props => {
  console.log(props);
  // return null;
  return (
    <>
      <UserSelfCard users={props.myuser} />
      <div className={styles.card} />
    </>
  );
};

export default UserCard;
