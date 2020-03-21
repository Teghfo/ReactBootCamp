const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "INC":
      newState.count++;
      break;
    case "DEC":
      newState.count--;
      break;
  }
  return newState;
};

export default reducer;
