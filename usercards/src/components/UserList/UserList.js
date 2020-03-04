import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(true);
  const [link, setLink] = useState("");

  useEffect(() => {
    if (link) {
      fetch(link)
        .then(res => res.json())
        .then(res => {
          setUsers(res.results[0]);
          setStatus(false);
        });
    }
  }, [link]);

  const handleLink = myLink => {
    setLink("");
    setTimeout(() => {
      setLink(myLink);
    }, 1000);
  };

  return (
    <>
      <div>
        {status ? "...loading" : <UserCard myuser={users} />}
        <button onClick={() => handleLink("https://api.randomuser.me/")}>
          link
        </button>
      </div>
    </>
  );
};

export default UserList;
