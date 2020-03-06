import React, { useState, useEffect } from "react";
import styles from "./UserSelfCard.module.scss";
import { IoMdPerson } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const UserSelfCard = ({ users }) => {
  const [textStatus, setTExtStatus] = useState("name");
  const [textContent, setTextContent] = useState({
    header: "Hi, My name is",
    content: `${users.name.first} ${users.name.last}`
  });
  const handleHoverable = () => {
    setTextContent({ ...textContent, header: "gomsho" });
  };

  useEffect(() => {
    setTextContent({
      header: "Hi, My name is",
      content: `${users.name.first} ${users.name.last}`
    });
  }, [users]);

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
        <div className={styles.buttonContainer}>
          <a onMouseEnter={() => handleHoverable("name")}>
            <span>
              <IoMdPerson />
            </span>
          </a>
          <span>
            <AiOutlineMail />
          </span>
          <span>
            <FaRegCalendarCheck />
          </span>
          <span>
            <GoLocation />
          </span>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default UserSelfCard;
