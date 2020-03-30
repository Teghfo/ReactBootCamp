import React, { useContext } from "react";
import { counterContext } from "./myContexts";
import { INC, DEC, RESET } from "./hookReducer";

export function CounterThree() {
  const { state, dispatch, fetchedData } = useContext(counterContext);
  return (
    <div>
      <h3>count : {state.count}</h3>
      <br />
      <button onClick={() => dispatch({ type: INC })}>INC</button>
      <button onClick={() => dispatch({ type: DEC })}>DEC</button>
      <button onClick={() => dispatch({ type: RESET })}>RESET</button>
      <hr />
      <div>
        {fetchedData.loading
          ? "Loading..."
          : fetchedData.error
          ? fetchedData.error
          : fetchedData.data.map(data => <h3>{data.title}</h3>)}
      </div>
    </div>
  );
}
