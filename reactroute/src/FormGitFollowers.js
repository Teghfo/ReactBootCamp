import React, { useRef, useState } from "react";
import GitFollowers from "./GitFollowers";

export default function FormGitFollowers() {
  const [username, setUsername] = useState();
  const refInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    setUsername(refInput.current.value);
  };

  return (
    <>
      <form>
        <input ref={refInput} type="text" />
        {"  "}
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      {username ? <GitFollowers username={username} /> : ""}
    </>
  );
}
