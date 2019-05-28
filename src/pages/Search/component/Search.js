import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { SearchForm } from "components/SearchForm";
import { PhotoGrid } from "components/PhotoGrid";
import queryString from "query-string";
import Typography from "@material-ui/core/Typography";

import styles from "./Search.module.scss";

class Search extends Component {
  componentDidMount() {
    this.searchTerm();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      this.searchTerm();
    }
  }

  handleSearch = term => {
    const { history } = this.props;
    history.push(`/search?term=${term}`);
  };

  searchTerm() {
    const { location } = this.props;
    const params = queryString.parse(location.search);
    if (params && params.term) {
      const { term } = params;
      const { searchPhoto } = this.props;
      searchPhoto(term);
    }
  }

  render() {
    const { classes, result, searchTerm } = this.props;

    return (
      <Fragment>
        <div className={styles.searchBox}>
          <SearchForm
            formStyle={styles.searchForm}
            inputStyle={styles.searchForm__input}
            muiClassesForButton={classes}
            onClickAction={this.handleSearch}
            changedSearchTerm={searchTerm}
          />
        </div>
        <div className={styles.resultBox}>
          {result && result.length > 0 ? (
            <PhotoGrid images={result} />
          ) : (
            <Typography component="h2" variant="h2" color="textPrimary">
              Нет изображений соответствующих данному запросу
            </Typography>
          )}
        </div>
      </Fragment>
    );
  }
}

Search.propTypes = {
  location: PropTypes.any,
  history: PropTypes.shape({}),
  searchPhoto: PropTypes.func.isRequired,
  classes: PropTypes.any,
  result: PropTypes.array.isRequired,
  searchTerm: PropTypes.any,
};

export default Search;
