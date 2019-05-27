const getPhotosState = state => state.photos;
const getAvailableCategories = state => state.photos.listOfAvailableCategories;
const getActiveCategory = state => state.photos.activeCategory;
const getActivePhoto = state => state.photos.activePhoto;
const getPhotosToDispaly = state => state.photos.photos;

export {
  getPhotosState,
  getAvailableCategories,
  getActiveCategory,
  getPhotosToDispaly,
  getActivePhoto,
};
