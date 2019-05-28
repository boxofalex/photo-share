import React, { Component } from "react";
import PropTypes from "prop-types";
import { Banner } from "components/Banner";
import Typography from "@material-ui/core/Typography";
import { SearchForm } from "components/SearchForm";
import { PhotoGrid } from "components/PhotoGrid";
import { CategoryList } from "components/CategoryList";
import { AddCategoryForm } from "components/AddCategoryForm";
import Button from "@material-ui/core/Button";
import banner from "assets/images/banner.jpg";

import styles from "./Index.module.scss";

const bannerConfig = {
  backgroundImage: `url(${banner})`,
  backgroundPosition: "top 50% center",
  backgroundRepeat: "no-repeat",
};

class Index extends Component {
  componentDidMount() {
    const { fetchCategories, fetchCategory } = this.props;
    fetchCategories();
    fetchCategory(0);
  }

  handleSearch = term => {
    const { history } = this.props;
    history.push(`/search?term=${term}`);
  };

  render() {
    const {
      classes,
      listOfCategories,
      activeCategory,
      isAddCategoryFormOpen,
      photos,
      openAddCategoryForm,
      closeAddCategoryForm,
      addCategory,
      fetchCategory,
    } = this.props;

    return (
      <div className={styles.container}>
        <Banner sourceImg={banner} imageConfig={bannerConfig}>
          <div className={styles.insideBanner}>
            <Typography component="h1" variant="h1" color="textSecondary">
              Поиск фотографий
            </Typography>
            <SearchForm
              formStyle={styles.searchForm}
              inputStyle={styles.searchForm__input}
              muiClassesForButton={classes}
              onClickAction={this.handleSearch}
            />
          </div>
        </Banner>
        <CategoryList
          items={[{ _id: 0, name: "Все" }, ...listOfCategories]}
          activeCategory={activeCategory && activeCategory.name}
          changeActiveCategory={fetchCategory}
        />
        <div className={styles.addCategory}>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            disableRipple
            onClick={openAddCategoryForm}>
            Добавить категорию
          </Button>
        </div>
        <PhotoGrid images={photos} />
        <AddCategoryForm
          isOpen={isAddCategoryFormOpen}
          closeForm={closeAddCategoryForm}
          addCategory={addCategory}
        />
      </div>
    );
  }
}

Index.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  fetchCategory: PropTypes.func.isRequired,
  history: PropTypes.shape({}),
  classes: PropTypes.any,
  listOfCategories: PropTypes.array.isRequired,
  activeCategory: PropTypes.any,
  isAddCategoryFormOpen: PropTypes.bool.isRequired,
  photos: PropTypes.array.isRequired,
  openAddCategoryForm: PropTypes.func.isRequired,
  closeAddCategoryForm: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
};

export default Index;
