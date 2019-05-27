import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESSFULL,
  ADD_CATEGORY_FAIL,
  FETCH_CATEGORY,
  FETCH_CATEGORY_SUCCESSFULL,
  FETCH_CATEGORY_FAIL,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESSFULL,
  FETCH_CATEGORIES_FAIL,
  FETCH_ALL_PHOTOS,
  FETCH_ALL_PHOTOS_SUCCESSFULL,
  FETCH_ALL_PHOTOS_FAIL,
  UPLOAD_PHOTO,
  UPLOAD_PHOTO_SUCCESSFULL,
  UPLOAD_PHOTO_FAIL,
  SELECT_PHOTO,
  SELECT_PHOTO_SUCCESSFULL,
  SELECT_PHOTO_FAIL,
  UPDATE_PHOTO_RATING,
  UPDATE_PHOTO_RATING_SUCCESSFULL,
  UPDATE_PHOTO_RATING_FAIL,
} from "./constants";
import FormData from "form-data";

import { uiActions } from "store/ui";

const fetchCategories = () => async (dispatch, getState, api) => {
  dispatch({ type: FETCH_CATEGORIES });
  try {
    const response = await api.get(`/categories`).then(res => res.data);
    dispatch({ type: FETCH_CATEGORIES_SUCCESSFULL, payload: response.data });
  } catch (err) {
    dispatch({ type: FETCH_CATEGORIES_FAIL });
  }
};

const addCategory = name => async (dispatch, getState, api) => {
  dispatch({ type: ADD_CATEGORY });
  try {
    const response = await api.post(`/categories`, { name });
    dispatch({ type: ADD_CATEGORY_SUCCESSFULL });
    dispatch(fetchCategories());
    dispatch(uiActions.closeAddCategoryForm());
  } catch (err) {
    dispatch({ type: ADD_CATEGORY_FAIL });
  }
};

const fetchAllPhotos = () => async (dispatch, getState, api) => {
  dispatch({ type: FETCH_ALL_PHOTOS });
  try {
    const response = await api.get(`/photos`).then(res => res.data);
    dispatch({ type: FETCH_ALL_PHOTOS_SUCCESSFULL, payload: response.data });
  } catch (err) {
    dispatch({ type: FETCH_ALL_PHOTOS_FAIL });
  }
};

const fetchCategory = id => async (dispatch, getState, api) => {
  if (id === 0) {
    dispatch(fetchAllPhotos());
    dispatch({ type: FETCH_CATEGORY_SUCCESSFULL, payload: { _id: 0, name: "Все", photos: [] } });
  } else {
    dispatch({ type: FETCH_CATEGORY });
    try {
      const response = await api.get(`/categories/${id}`).then(res => res.data);
      dispatch({ type: FETCH_CATEGORY_SUCCESSFULL, payload: response.data.category });
    } catch (err) {
      dispatch({ type: FETCH_CATEGORY_FAIL });
    }
  }
};

const uploadPhoto = (name, category, location, image) => async (dispatch, getState, api) => {
  const state = getState();
  dispatch({ type: UPLOAD_PHOTO });
  try {
    const data = new FormData();
    data.append("image", image);
    data.append("name", name);
    data.append("category", category);
    data.append("location", location);
    data.append("author", state.user.activeUserId);
    const response = await api.post(`/photos`, data);
    if (response.status === 200) {
      dispatch(uiActions.closeAddImageForm());
      dispatch({ type: UPLOAD_PHOTO_SUCCESSFULL });
      dispatch(fetchCategory(state.photos.activeCategory._id));
    }
  } catch (err) {
    dispatch({ type: UPLOAD_PHOTO_FAIL });
  }
};

const selectPhoto = id => async (dispatch, getState, api) => {
  dispatch({ type: SELECT_PHOTO });
  try {
    const response = await api.get(`/photos`).then(res => res.data.data);
    const activePhoto = response.photos.filter(item => {
      return item._id === id;
    });
    if (activePhoto[0]) {
      dispatch({ type: SELECT_PHOTO_SUCCESSFULL, payload: activePhoto[0] });
    }
  } catch (err) {
    dispatch({ type: SELECT_PHOTO_FAIL });
  }
};

const updatePhotoRating = (value, photoId) => async (dispatch, getState, api) => {
  dispatch({ type: UPDATE_PHOTO_RATING });
  try {
    const response = await api.post(`/photos/update/${photoId}`, { updateValue: value });
    if (response.status === 200) {
      dispatch({ type: UPDATE_PHOTO_RATING_SUCCESSFULL });
      dispatch(selectPhoto(photoId));
    }
  } catch (err) {
    dispatch({ type: UPDATE_PHOTO_RATING_FAIL });
  }
};

export {
  fetchCategories,
  addCategory,
  fetchCategory,
  fetchAllPhotos,
  uploadPhoto,
  selectPhoto,
  updatePhotoRating,
};
