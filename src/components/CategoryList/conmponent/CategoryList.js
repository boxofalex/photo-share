import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import styles from "./CategoryList.module.scss";

const CategoryList = ({ items, activeCategory, changeActiveCategory }) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        let itemClass = [styles.category];
        if (item === activeCategory) {
          itemClass = [...itemClass, styles.categoryActive];
        }
        if (index === items.length - 1) {
          return (
            <span key={item} className={itemClass.join(" ")}>
              <button type="button" onClick={() => changeActiveCategory(item)}>
                {item}
              </button>
            </span>
          );
        }
        return (
          <span key={item} className={itemClass.join(" ")}>
            <button type="button" onClick={() => changeActiveCategory(item)}>
              {item}
            </button>
            <span className={styles.divider}>|</span>
          </span>
        );
      })}
    </div>
  );
};

export default CategoryList;
