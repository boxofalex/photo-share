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
  SELECT_PHOTO,
  SELECT_PHOTO_SUCCESSFULL,
  SELECT_PHOTO_FAIL,
} from "./constants";

const initState = {
  activeCategory: null,
  listOfAvailableCategories: [],
  photos: [],
  activePhoto: null,
};

const photosReducerMap = {
  [ADD_CATEGORY]: (state, action) => {
    return state;
  },
  [ADD_CATEGORY_SUCCESSFULL]: (state, action) => {
    return state;
  },
  [ADD_CATEGORY_FAIL]: (state, action) => {
    return state;
  },
  [FETCH_CATEGORY]: (state, action) => {
    return state;
  },
  [FETCH_CATEGORY_SUCCESSFULL]: (state, action) => {
    return {
      ...state,
      activeCategory: action.payload,
      photos: action.payload.photos,
    };
  },
  [FETCH_CATEGORY_FAIL]: (state, action) => {
    return { ...state, activeCategory: {}, photos: [] };
  },
  [FETCH_CATEGORIES]: (state, action) => {
    return state;
  },
  [FETCH_CATEGORIES_SUCCESSFULL]: (state, action) => {
    return {
      ...state,
      listOfAvailableCategories: action.payload.categories,
    };
  },
  [FETCH_CATEGORIES_FAIL]: (state, action) => {
    return state;
  },
  [FETCH_ALL_PHOTOS]: (state, action) => {
    return state;
  },
  [FETCH_ALL_PHOTOS_SUCCESSFULL]: (state, action) => {
    return { ...state, photos: action.payload.photos };
  },
  [FETCH_ALL_PHOTOS_FAIL]: (state, action) => {
    return { ...state, activeCategory: {}, photos: [] };
  },
  [SELECT_PHOTO]: (state, action) => {
    return state;
  },
  [SELECT_PHOTO_SUCCESSFULL]: (state, action) => {
    return { ...state, activePhoto: action.payload };
  },
  [SELECT_PHOTO_FAIL]: (state, action) => {
    return state;
  },
};

const photosReducer = (state = initState, action) => {
  const reducer = photosReducerMap[action.type];
  if (!reducer) {
    return state;
  }
  return reducer(state, action);
};

export default photosReducer;
