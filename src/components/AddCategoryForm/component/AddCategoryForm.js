import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import styles from "./AddCategoryForm.module.scss";

class AddCategoryForm extends Component {
  state = {
    categoryName: "",
  };

  handleCategoryName = event => {
    this.setState({ categoryName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { categoryName } = this.state;
    const { addCategory } = this.props;
    if (categoryName) {
      addCategory(categoryName);
    }
  };

  render() {
    const { isOpen, closeForm, addCategory } = this.props;
    return (
      <div className={styles.container}>
        <Dialog open={isOpen}>
          <DialogTitle id="form-dialog-title">Довавить новую категорию</DialogTitle>
          <form className={styles.signinForm} onSubmit={this.handleSubmit}>
            <DialogContent>
              <div className={styles.signinForm__login}>
                <span>Имя</span>
                <TextField
                  id="category"
                  name="category"
                  type="text"
                  margin="normal"
                  onChange={this.handleCategoryName}
                  fullWidth
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disableRipple={true}
                onSubmit={this.handleSubmit}>
                Добавить
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disableRipple={true}
                onClick={closeForm}>
                Отмена
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default AddCategoryForm;
