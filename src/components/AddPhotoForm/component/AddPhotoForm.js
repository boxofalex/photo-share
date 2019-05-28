import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import NativeSelect from "@material-ui/core/NativeSelect";
import Input from "@material-ui/core/Input";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import keys from "config/keys";
import { withStyles } from "@material-ui/core/styles";

import styles from "./AddPhotoForm.module.scss";

const mapStyles = {
  width: "450px",
  height: "300px",
};

const dialogStyles = {
  forDialogRoot: {
    width: "500px",
    margin: "0",
  },
  forDialogPaper: {
    width: "500px",
  },
  forDialogTitleRoot: {
    padding: "24px 24px 0 24px",
    textAlign: "center",
  },
  forDialogContent: {
    padding: "5px 24px 0 24px",
    paddingTop: "5px",
  },
};

const initState = {
  name: "",
  category: "",
  location: "Не указано",
  image: null,
  isLocationToAdd: false,
  isLocationChangable: false,
  currentCenterLocation: {
    lat: 51.509865,
    lng: -0.118092,
  },
  choosenPlaceLocation: null,
};

class AddPhotoForm extends Component {
  state = initState;

  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.event = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const { coords } = pos;
        this.setState({
          currentCenterLocation: {
            lat: coords.latitude,
            lng: coords.longitude,
          },
        });
      });
    }
  }

  handleName = event => {
    this.setState({ name: event.target.value });
  };

  handleCategory = event => {
    this.setState({ category: event.target.value });
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
      this.setState(initState);
    }
  };

  toggleLocationAdd = () => {
    const { isLocationChangable } = this.state;
    this.setState(prevState => {
      const newIsLocationToAdd = !prevState.isLocationToAdd;
      if (newIsLocationToAdd) {
        if (!isLocationChangable) {
          this.renderAutoComplete();
          return { isLocationToAdd: newIsLocationToAdd, isLocationChangable: true };
        }
      }
      return { isLocationToAdd: newIsLocationToAdd };
    });
  };

  renderAutoComplete = () => {
    const { google } = this.props;
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current, {
      types: ["(cities)"],
    });
    this.event = this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  };

  closeForm = () => {
    const { closeForm } = this.props;
    closeForm();
    this.setState(initState);
  };

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    const city = place.formatted_address;
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    this.setState({ choosenPlaceLocation: { lat, lng }, location: city });
  }

  render() {
    const { isOpen, availableCategories, google, classes } = this.props;
    const {
      category,
      name,
      currentCenterLocation,
      isLocationToAdd,
      choosenPlaceLocation,
    } = this.state;

    return (
      <div className={styles.container}>
        <Dialog open={isOpen} classes={{ paper: classes.forDialogPaper }}>
          <DialogTitle id="form-dialog-title" classes={{ root: classes.forDialogTitleRoot }}>
             Добавить фото
          </DialogTitle>
          <form className={styles.addPhotoForm} onSubmit={this.handleSubmit}>
            <DialogContent classes={{ root: classes.forDialogContent }}>
              <div className={styles.addPhotoForm__name}>
                <span>Название</span>
                <TextField
                  id="name"
                  name="name"
                  value={name}
                  type="text"
                  margin="normal"
                  onChange={this.handleName}
                  fullWidth
                />
              </div>
              <div className={styles.addPhotoForm__category}>
                <span>Категория</span>
                <div>
                  <NativeSelect
                    value={category}
                    onChange={this.handleCategory}
                    input={<Input id="category" name="category" />}>
                    <option value="" />
                    {availableCategories && (
                      <Fragment>
                        {availableCategories.map(item => {
                          return (
                            <option key={item.name} value={item.name}>
                              {item.name}
                            </option>
                          );
                        })}
                      </Fragment>
                    )}
                  </NativeSelect>
                </div>
              </div>
              <div className={styles.addPhotoForm__file}>
                <span>Выберите файл:</span>
                <input type="file" name="file" onChange={this.handleImage} />
              </div>
              <div className={styles.addPhotoForm__maps}>
                <input
                  className={styles.location_checkbox}
                  type="checkbox"
                  onChange={this.toggleLocationAdd}
                />
                <span>Геоданные:</span>
                <input
                  className={styles.location_input}
                  id="location"
                  name="location"
                  type="text"
                  ref={this.autocompleteInput}
                  disabled={!isLocationToAdd}
                />
                <div className={styles.maps}>
                  <Map
                    google={google}
                    zoom={10}
                    style={mapStyles}
                    center={choosenPlaceLocation || currentCenterLocation}
                    initialCenter={currentCenterLocation}>
                    {choosenPlaceLocation ? <Marker position={choosenPlaceLocation} /> : ""}
                  </Map>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button type="submit" variant="contained" color="secondary" disableRipple>
                Загрузить
              </Button>
              <Button variant="contained" color="secondary" disableRipple onClick={this.closeForm}>
                Отмена
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

AddPhotoForm.propTypes = {
  uploadPhoto: PropTypes.func.isRequired,
  google: PropTypes.shape({}).isRequired,
  closeForm: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  availableCategories: PropTypes.array.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(dialogStyles)(
  GoogleApiWrapper({
    apiKey: keys.mapsKey,
  })(AddPhotoForm),
);
