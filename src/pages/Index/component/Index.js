import React, { Component } from "react";
import PropTypes from "prop-types";
import { Banner } from "components/Banner";
import Typography from "@material-ui/core/Typography";
import { SearchForm } from "components/SearchForm";
import { PhotoGrid } from "components/PhotoGrid";
import { CategoryList } from "components/CategoryList";
import banner from "assets/images/banner.jpg";

import styles from "./Index.module.scss";

const categoryNames = ["Новые", "Природа", "Автомобили"];
const activeCategory = "Все";
const bannerConfig = {
  backgroundImage: `url(${banner})`,
  backgroundPosition: "top 50% center",
  backgroundRepeat: "no-repeat",
};
const images = [
  { url: "/1.jpg", id: 1 },
  { url: "/2.jpg", id: 2 },
  { url: "/3.jpg", id: 3 },
  { url: "/4.jpg", id: 4 },
  { url: "/5.jpg", id: 5 },
  { url: "/6.jpg", id: 6 },
];

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory,
    };
  }

  changeActiveCategory = name => {
    this.setState({ activeCategory: name });
  };

  render() {
    const { muiClassesForButton } = this.props;

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
              muiClassesForButton={muiClassesForButton}
            />
          </div>
        </Banner>
        <CategoryList
          items={[activeCategory, ...categoryNames]}
          activeCategory={this.state.activeCategory}
          changeActiveCategory={this.changeActiveCategory}
        />
        <PhotoGrid images={images} />
      </div>
    );
  }
}

export default Index;
