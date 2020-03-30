import { INCREMENT, DECREMENT } from "../actions/actionTypes";

export const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      if (!action.payload) {
        return { count: state.count + 1 };
      }
      return { count: state.count + action.payload };
    case DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
