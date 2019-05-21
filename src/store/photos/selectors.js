const getPhotosState = state => state.photos;
const getAvailableCategories = state => state.photos.listOfAvailableCategories;
const getActiveCategory = state => state.photos.activeCategory;
const getPhotosToDispaly = state => state.photos.photos;

export { getPhotosState, getAvailableCategories, getActiveCategory, getPhotosToDispaly };
