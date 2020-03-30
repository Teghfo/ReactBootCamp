import React, { useContext } from "react";
import { counterContext } from "./myContexts";
import { INC, DEC, RESET } from "./hookReducer";

export function CounterOne() {
  const counter = useContext(counterContext);
  return (
    <div>
      <h3>count : {counter.state.count}</h3>
      <br />
      <button onClick={() => counter.dispatch({ type: INC })}>INC</button>
      <button onClick={() => counter.dispatch({ type: DEC })}>DEC</button>
      <button onClick={() => counter.dispatch({ type: RESET })}>RESET</button>
    </div>
  );
}
