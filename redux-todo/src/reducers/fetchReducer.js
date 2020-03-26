import {
  FETCH_TODO_ERROR,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_REQUEST
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: [],
  err: ""
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return { loading: true, data: [], err: "" };
    case FETCH_TODO_SUCCESS:
      return { loading: false, data: action.payload, err: "" };
    case FETCH_TODO_ERROR:
      return { loading: false, data: [], err: action.payload };
    default:
      return state;
  }
};
