import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT_ASYNC, DECREMENT_ASYNC } from "../actions/actionTypes";

export default function Counter() {
  const countVal = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <hr />
        <p> count : {countVal.count}</p>
        <button
          onClick={() =>
            dispatch({
              type: INCREMENT_ASYNC
            })
          }
        >
          INC
        </button>
        {"  "}
        <button
          onClick={() =>
            dispatch({
              type: DECREMENT_ASYNC
            })
          }
        >
          DEC
        </button>
        <br />
        <br />
        <hr />
      </div>
    </>
  );
}
