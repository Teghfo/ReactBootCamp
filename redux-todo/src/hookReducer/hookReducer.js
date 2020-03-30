/// Counter Action Type
export const INC = "INC";
export const DEC = "DEC";
export const RESET = "RESET";

/// Fetcher Action Type
export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_ERROR = "FETCH_TODO_ERROR";

export const initialState = {
  count: 0
};

export const initialStateFetcher = {
  loading: false,
  data: [],
  error: ""
};

export const reducer = (state, action) => {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    case RESET:
      return initialState;
    case "MULTIPLY":
      return { count: (state.count + 1) * 2 };
    default:
      return state;
  }
};

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return { loading: true, data: [], error: "" };
    case FETCH_TODO_SUCCESS:
      return { loading: false, data: action.payload, error: "" };
    case FETCH_TODO_ERROR:
      return { loading: false, data: [], error: action.payload };
  }
};
