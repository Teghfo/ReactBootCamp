import React, { useReducer } from "react";
import { reducer, initialState, INC, DEC, RESET } from "./hookReducer";
import counterReducer from "../reducers/counterReducer";
import { initialState as reduxInitialState } from "../reducers/counterReducer";

export function CounterTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [multiply, dispatchMultiply] = useReducer(reducer, initialState);
  const [reduxReducerState, dispatchRedux] = useReducer(
    counterReducer,
    reduxInitialState
  );

  return (
    <div>
      <h3>count : {state.count}</h3>
      <br />
      <button onClick={() => dispatch({ type: INC })}>INC</button>
      <button onClick={() => dispatch({ type: DEC })}>DEC</button>
      <button onClick={() => dispatch({ type: RESET })}>RESET</button>
      <br />
      <h3>multiply2 : {multiply.count}</h3>
      <button onClick={() => dispatchMultiply({ type: "MULTIPLY" })}>
        MUL
      </button>
      <button onClick={() => dispatchMultiply({ type: RESET })}>RESET</button>
      <br />
      <h3>{reduxReducerState.count}</h3>
      <button onClick={() => dispatchRedux({ type: "INCREMENT" })}>INC</button>
    </div>
  );
}

/// redux ----> action, reducer ====> mapStateToProps  state redux   , mapDispatchToProps  dispaching actions component
/// useState ----> return [state, setState]

/// useReducer  ----> return [state , dispatch] ----> useReducer(reducer)

// reducer(state=initialState, action)

//useReducer   kindly similar store redux
