import React, { useState, useEffect } from "react";
import styles from "./UserSelfCard.module.scss";

const UserSelfCard = ({ users }) => {
  const [textStatus, setTExtStatus] = useState("name");
  const [textContent, setTextContent] = useState({
    header: "Hi, My name is",
    content: `${users.name.first} ${users.name.last}`
  });

  console.log(users);
  return (
    <>
      <div className={`${styles.card} ${styles.selfCard}`}>
        <div>
          <img className={styles.image} src={users.picture.large} />
        </div>
        <div className={styles.detail}>
          <p className={styles.header}>{textContent.header}</p>
          <p className={styles.content}>{textContent.content}</p>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default UserSelfCard;
