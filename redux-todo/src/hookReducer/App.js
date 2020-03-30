import React, { useReducer, useEffect } from "react";
import { counterContext } from "./myContexts";
import {
  initialState,
  reducer,
  initialStateFetcher,
  fetchReducer
} from "./hookReducer";
import { CounterOne } from "./CounterOne";
import { CounterThree } from "./CounterThree";
import {
  FETCH_TODO_ERROR,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS
} from "./hookReducer";
import axios from "axios";

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fetchedData, dispatchFetcher] = useReducer(
    fetchReducer,
    initialStateFetcher
  );

  useEffect(() => {
    dispatchFetcher({ type: FETCH_TODO_REQUEST });
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        dispatchFetcher({ type: FETCH_TODO_SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatchFetcher({ type: FETCH_TODO_ERROR, payload: err });
      });
  }, []);

  return (
    <counterContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
        fetchedData: fetchedData,
        dispatchFetcher: dispatchFetcher
      }}
    >
      <CounterOne />
      <CounterThree />
    </counterContext.Provider>
  );
}

// useState vs useReducer ----> state object  (useReducer) , logic complex (useReducer) , useReducer more readble compare to useState
