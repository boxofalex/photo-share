import React from "react";
import PropTypes from "prop-types";

import styles from "./Banner.module.scss";

const Banner = ({ textContainerClass, imageConfig, children }) => {
  return (
    <div className={[styles.banner, textContainerClass].join(" ")} style={imageConfig}>
      {children}
    </div>
  );
};

Banner.propTypes = {
  textContainerClass: PropTypes.string,
  imageConfig: PropTypes.shape({}).isRequired,
  children: PropTypes.element,
};

Banner.defaultProps = {
  textContainerClass: "",
  children: <p />,
};

export default Banner;
