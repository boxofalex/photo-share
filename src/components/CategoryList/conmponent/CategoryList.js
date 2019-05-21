import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import styles from "./CategoryList.module.scss";

const CategoryList = ({ items, activeCategory, changeActiveCategory }) => {
  const formatTitle = title => {
    return title.slice(0, 1).toUpperCase() + title.slice(1, title.length).toLowerCase();
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        let itemClass = [styles.category];
        if (item.name === activeCategory) {
          itemClass = [...itemClass, styles.categoryActive];
        }
        if (index === items.length - 1) {
          return (
            <span key={item.name} className={itemClass.join(" ")}>
              <button type="button" onClick={() => changeActiveCategory(item._id)}>
                {formatTitle(item.name)}
              </button>
            </span>
          );
        }
        return (
          <span key={item.name} className={itemClass.join(" ")}>
            <button type="button" onClick={() => changeActiveCategory(item._id)}>
              {formatTitle(item.name)}
            </button>
            <span className={styles.divider}>|</span>
          </span>
        );
      })}
    </div>
  );
};

export default CategoryList;
