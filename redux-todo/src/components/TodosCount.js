import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import setVisibilityFilter from "../actions/filterActions";

export default function TodosCount(props) {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> todos number - {todos.length}</h2>
      <button onClick={() => dispatch(setVisibilityFilter("ALL"))}>
        filter All
      </button>
      {"  "}
      <button onClick={() => dispatch(setVisibilityFilter("COMPLETE"))}>
        filter complete{" "}
      </button>
    </div>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     filtering: filterName => dispatch(setVisibilityFilter(filterName))
//   };
// };

// export default connect(null, mapDispatchToProps)(TodosCount);
