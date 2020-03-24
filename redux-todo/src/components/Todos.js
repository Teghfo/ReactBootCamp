import React from "react";
import styles from "./TodoStyle.module.scss";
import { connect } from "react-redux";
import setVisibilityFilter from "../actions/filterActions";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const getVisibilityFilter = state =>
  state.todos.filter(todo => {
    switch (state.filterName) {
      case "ALL":
        return true;
      case "COMPLETE":
        return todo.done;
      case "UNCOMPLETE":
        return !todo.done;
      default:
        throw new Error("Wrong Filter");
    }
  });

function Todos({ todos, setVisibilityFilter }) {
  return (
    <div className={styles.container}>
      <h1>Todo App with React and Redux</h1>
      <hr />
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <AddTodo />
      <div className={styles.filter}>
        <button onClick={() => setVisibilityFilter("ALL")}>ALL</button>
        <button onClick={() => setVisibilityFilter("COMPLETE")}>
          COMPLETE
        </button>
        <button onClick={() => setVisibilityFilter("UNCOMPLETE")}>
          UNCOMPLETE
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: getVisibilityFilter(state)
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     filterTodo: dispatch({
//       type: "ADD_TODO"
//     })
//   };
// };

export default connect(mapStateToProps, { setVisibilityFilter })(Todos);

// connect HoC ===> Component subscribe Redux ==> first arg --> store give new state to component , second arg  ---> actions that component can dispatch to redux
