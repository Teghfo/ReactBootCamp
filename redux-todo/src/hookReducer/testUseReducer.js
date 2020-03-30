import React, { useReducer } from "react";
import { reducer, initialState, INC, DEC, RESET } from "./hookReducer";

export function TestUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>count : {state.count}</h3>
      <br />
      <button onClick={() => dispatch({ type: INC })}>INC</button>
      <button onClick={() => dispatch({ type: DEC })}>DEC</button>
      <button onClick={() => dispatch({ type: RESET })}>RESET</button>
    </div>
  );
}

/// redux ----> action, reducer ====> mapStateToProps  state redux   , mapDispatchToProps  dispaching actions component
/// useState ----> return [state, setState]

/// useReducer  ----> return [state , dispatch] ----> useReducer(reducer)

// reducer(state=initialState, action)

//useReducer   kindly similar store redux
