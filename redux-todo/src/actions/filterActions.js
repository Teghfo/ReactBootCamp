import { SET_VISIBILITY_FILTER } from "./actionTypes";

const setVisibilityFilter = filterName => ({
  type: SET_VISIBILITY_FILTER,
  filterName
});

export default setVisibilityFilter;
