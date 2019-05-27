import { INIT_SEARCH, SEARCH_SUCCESSFULL, SEARCH_FAIL, CLEAR_SEARCH } from "./constants";

const initState = {
  searchTerm: null,
  result: [],
};

const searchReducerMap = {
  [INIT_SEARCH]: (state, action) => {
    return { ...state, searchTerm: action.payload };
  },
  [SEARCH_SUCCESSFULL]: (state, action) => {
    return { ...state, result: action.payload };
  },
  [SEARCH_FAIL]: (state, action) => {
    return { ...state, searchTerm: null, result: [] };
  },
  [CLEAR_SEARCH]: (state, action) => {
    return { ...state, searchTerm: null, result: [] };
  },
};

const searchReducer = (state = initState, action) => {
  const reducer = searchReducerMap[action.type];
  if (!reducer) {
    return state;
  }
  return reducer(state, action);
};

export default searchReducer;
