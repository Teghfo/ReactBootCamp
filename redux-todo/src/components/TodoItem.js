import React, { useState, useRef, useEffect } from "react";
import styles from "./TodoStyle.module.scss";
import { connect } from "react-redux";
import { editTodo, toggleTodo, removeTodo } from "../actions/todoActions";

function TodoItem({ todo, edit, toggle, remove }) {
  const [editing, setEditing] = useState(false);
  const refNewName = useRef();

  useEffect(() => {
    if (editing) {
      refNewName.current.focus();
    }
  }, [editing]);

  const handleUpdate = () => {
    edit(todo.id, refNewName.current.value);
    setEditing(false);
  };
  return editing ? (
    <div className={styles.edditTodo}>
      <input placeholder={todo.name} ref={refNewName} type="text" />
      <span onClick={handleUpdate}>✓</span>
    </div>
  ) : (
    <div className={`${styles.TodoItem} ${todo.done ? styles.completed : ""}`}>
      <div className={styles.todoDetail}>
        <h3
          onClick={() => {
            toggle(todo.id);
          }}
          className={styles.name}
        >
          {todo.name}
        </h3>
        <p className={styles.date}>{todo.date}</p>
      </div>
      <div className={styles.todoButtons}>
        <button className={styles.edit} onClick={() => setEditing(true)}>
          Edit
        </button>
        <button className={styles.delete} onClick={() => remove(todo.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default connect(undefined, {
  edit: editTodo,
  remove: removeTodo,
  toggle: toggleTodo
})(TodoItem);
