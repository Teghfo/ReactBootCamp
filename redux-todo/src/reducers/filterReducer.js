import { SET_VISIBILITY_FILTER } from "../actions/actionTypes";

const initialState = "ALL";

const setFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filterName;
    default:
      return state;
  }
};

export default setFilterReducer;
