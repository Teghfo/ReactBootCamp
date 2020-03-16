const { createStore } = require("redux");

const initialState = {
  counter: 0
};

const testReducer = (state = initialState, action) => {
  newState = { ...state };
  if (action.value) {
    console.log(action.value);
  }

  switch (action.type) {
    case "INCREMENT":
      newState.counter++;

      break;
    case "DECREMENT":
      newState.counter--;
      break;
  }

  return newState;
};

const store = createStore(testReducer);

store.subscribe(() => {
  console.log("changed state", store.getState());
});

store.dispatch({ type: "INCREMENT", value: "ashkan" });

store.dispatch({ type: "INCREMENT", value: "reza" });

store.dispatch({ type: "INCREMENT", value: "ahmad" });

store.dispatch({ type: "DECREMENT", value: "leila" });

store.dispatch({ type: "DECR", value: "ghazanfar" });
