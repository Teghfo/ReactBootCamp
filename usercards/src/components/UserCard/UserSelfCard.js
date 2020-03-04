import React from "react";
import styles from "./UserSelfCard.module.scss";

const UserSelfCard = ({ users }) => {
  return (
    <>
      <div className={styles.card}>
        <div>
          <img src={users.picture.large} />
          <p />
          <p />
        </div>

        <div></div>
      </div>
    </>
  );
};

export default UserSelfCard;
