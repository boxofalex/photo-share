import React from "react";
import PropTypes from "prop-types";
import { ImageItem } from "components/ImageItem";

import styles from "./PhotoGrid.module.scss";

const PhotoGrid = ({ images }) => {
  return (
    <div className={styles.image_list}>
      {images &&
        images.map(image => {
          return <ImageItem key={image._id} image={image} />;
        })}
    </div>
  );
};

PhotoGrid.propTypes = {
  images: PropTypes.array.isRequired,
};

export default PhotoGrid;
