import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./SearchForm.module.scss";

const SearchForm = ({ muiClassesForButton, formStyle, inputStyle }) => {
  return (
    <form className={formStyle}>
      <input className={inputStyle} />
      <Button
        className={muiClassesForButton.rootForsearchButton}
        disableRipple={true}
        disableFocusRipple={true}>
        <SearchIcon className={muiClassesForButton.rootForSearchLogo} />
      </Button>
    </form>
  );
};

export default SearchForm;
