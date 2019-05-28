import { INIT_SEARCH, SEARCH_SUCCESSFULL, SEARCH_FAIL, CLEAR_SEARCH } from "./constants";

export const clearSearch = () => (dispatch, getState, api) => {
  dispatch({ type: CLEAR_SEARCH });
};

export const searchPhoto = title => async (dispatch, getState, api) => {
  dispatch(clearSearch());
  dispatch({ type: INIT_SEARCH, payload: title });
  try {
    const response = await api.post(`/search`, { query: title });
    if (response.status === 200) {
      dispatch({ type: SEARCH_SUCCESSFULL, payload: response.data.data.photos });
    }
  } catch (err) {
    dispatch({ type: SEARCH_FAIL });
  }
};
