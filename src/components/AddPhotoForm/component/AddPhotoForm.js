import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import NativeSelect from "@material-ui/core/NativeSelect";
import Input from "@material-ui/core/Input";

import styles from "./AddPhotoForm.module.scss";

class AddPhotoForm extends Component {
  state = {
    name: "",
    category: "",
    location: "Moscow",
    image: null,
  };

  handleName = event => {
    this.setState({ name: event.target.value });
  };

  handleCategory = event => {
    console.log(event.target.value);
    // this.setState({ category: event.target.value });
  };

  handleImage = event => {
    this.setState({ image: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, category, image, location } = this.state;
    const { uploadPhoto } = this.props;
    if (name && category && image && location) {
      uploadPhoto(name, category, location, image);
    }
  };

  render() {
    const { isOpen, closeForm } = this.props;
    return (
      <div className={styles.container}>
        <Dialog open={isOpen}>
          <DialogTitle id="form-dialog-title"> Добавить фото</DialogTitle>
          <form className={styles.signinForm} onSubmit={this.handleSubmit}>
            <DialogContent>
              <div className={styles.signinForm__login}>
                <span>Название</span>
                <TextField
                  id="name"
                  name="name"
                  type="text"
                  margin="normal"
                  onChange={this.handleName}
                  fullWidth
                />
              </div>
              <div className={styles.signinForm__password}>
                <span>Категория</span>
                <NativeSelect
                  value={this.state.category}
                  onChange={this.handleCategory}
                  input={<Input name="category" />}>
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </div>
              <div>
                <input type="file" name="file" onChange={this.handleImage} />
              </div>
            </DialogContent>
            <DialogActions>
              <Button type="submit" variant="contained" color="secondary" disableRipple={true}>
                Загрузить
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

export default AddPhotoForm;
