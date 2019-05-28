import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./SearchForm.module.scss";

class SearchForm extends Component {
  state = {
    searchTerm: "",
  };

  componentDidMount() {
    const { changedSearchTerm } = this.props;
    if (changedSearchTerm) {
      this.updateLocalSearchTerm(changedSearchTerm);
    } else {
      this.updateLocalSearchTerm("");
    }
  }

  componentDidUpdate(prevProps) {
    const { changedSearchTerm } = this.props;
    if (changedSearchTerm !== prevProps.changedSearchTerm) {
      if (changedSearchTerm) {
        this.updateLocalSearchTerm(changedSearchTerm);
      } else {
        this.updateLocalSearchTerm("");
      }
    }
  }

  handleSearchInput = event => {
    this.updateLocalSearchTerm(event.target.value);
  };

  updateLocalSearchTerm = value => {
    this.setState({ searchTerm: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const { onClickAction } = this.props;
    onClickAction(searchTerm);
  };

  render() {
    const { muiClassesForButton, formStyle, inputStyle } = this.props;
    const { searchTerm } = this.state;
    return (
      <form className={formStyle} onSubmit={this.handleSubmit}>
        <input
          className={inputStyle}
          id="search"
          name="seacrh"
          type="text"
          value={searchTerm}
          onChange={this.handleSearchInput}
        />
        <Button
          className={muiClassesForButton.rootForsearchButton}
          disableRipple
          disableFocusRipple
          type="submit">
          <SearchIcon className={muiClassesForButton.rootForSearchLogo} />
        </Button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  changedSearchTerm: PropTypes.func.isRequired,
  changedSearchTerm: PropTypes.any,
  onClickAction: PropTypes.func.isRequired,
  muiClassesForButton: PropTypes.shape({}),
  formStyle: PropTypes.any,
  inputStyle: PropTypes.any,
};

export default SearchForm;
