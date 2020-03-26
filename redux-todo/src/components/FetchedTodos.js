import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo } from "../actions/fetchActions";

export default function FetchedTodos() {
  const { loading, data, err } = useSelector(state => state.fetchedTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return (
    <div>
      {loading ? (
        <h3>loading...</h3>
      ) : err ? (
        <p>{err}</p>
      ) : (
        data.map(todo => <div key={todo.id}>{todo.title}</div>)
      )}
    </div>
  );
}
