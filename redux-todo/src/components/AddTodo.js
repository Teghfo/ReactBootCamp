import React, { useState } from "react";
import styles from "./TodoStyle.module.scss";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

function AddTodo({ addTodo }) {
  const [todoName, setTodoName] = useState("");
  const handleChange = e => {
    setTodoName(e.target.value);
  };
  return (
    <div className={styles.addTodo}>
      <input
        onKeyDown={e => {
          if (e.key === "Enter") {
            addTodo(todoName);
            setTodoName("");
          }
        }}
        placeholder="Enter Task..."
        onChange={handleChange}
        value={todoName}
        type="text"
      />
      <span
        onClick={() => {
          addTodo(todoName);
          setTodoName("");
        }}
      >
        +
      </span>
    </div>
  );
}

export default connect(undefined, { addTodo })(AddTodo);
