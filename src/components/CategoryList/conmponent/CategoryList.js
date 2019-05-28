import React from "react";
import PropTypes from "prop-types";

import styles from "./CategoryList.module.scss";

const CategoryList = ({ items, activeCategory, changeActiveCategory }) => {
  const formatTitle = title => {
    return title.slice(0, 1).toUpperCase() + title.slice(1, title.length).toLowerCase();
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        return (
          <span
            key={item.name}
            className={
              item.name === activeCategory
                ? [styles.category, styles.categoryActive].join(" ")
                : styles.category
            }>
            <button type="button" onClick={() => changeActiveCategory(item._id)}>
              {formatTitle(item.name)}
            </button>
            {index !== items.length - 1 ? <span className={styles.divider}>|</span> : null}
          </span>
        );
      })}
    </div>
  );
};

CategoryList.propTypes = {
  items: PropTypes.array.isRequired,
  activeCategory: PropTypes.any,
  changeActiveCategory: PropTypes.func.isRequired,
};

export default CategoryList;
