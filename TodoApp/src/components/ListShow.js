import React from "react";

export default props => (
  <div
    style={{ color: props.todo.done ? "blue" : "" }}
    onClick={props.handleDone}
  >
    {" "}
    {props.todo.text}{" "}
  </div>
);

// 1. task done
// 2. show total done number
// 3. show done and uncomplete
// 4. delete every done task
