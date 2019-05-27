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
    if (this.props.location !== prevProps.location) {
      this.searchTerm();
    }
  }

  handleSearch = term => {
    const { history } = this.props;
    history.push(`/search?term=${term}`);
  };

  searchTerm() {
    const params = queryString.parse(this.props.location.search);
    if (params && params.term) {
      const term = params.term;
      const { searchPhoto } = this.props;
      searchPhoto(term);
    }
  }

  render() {
    const { muiClassesForButton, result, searchTerm } = this.props;

    return (
      <Fragment>
        <div className={styles.searchBox}>
          <SearchForm
            formStyle={styles.searchForm}
            inputStyle={styles.searchForm__input}
            muiClassesForButton={muiClassesForButton}
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

export default Search;
