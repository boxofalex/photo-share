import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import ThumbupIcon from "@material-ui/icons/ThumbUp";
import ThumbdownIcon from "@material-ui/icons/ThumbDown";
import IconButton from "@material-ui/core/IconButton";

import styles from "./Image.module.scss";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: null };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { selectPhoto } = this.props;
    if (id) {
      selectPhoto(id);
    }
  }

  like = id => {
    const { liked } = this.state;
    const { updatePhotoRating } = this.props;
    if (liked && liked === 1) {
      return;
    }
    updatePhotoRating(1, id);
    this.setState({ liked: 1 });
  };

  dislike = id => {
    const { liked } = this.state;
    const { updatePhotoRating } = this.props;
    if (liked && liked === -1) {
      return;
    }
    updatePhotoRating(-1, id);
    this.setState({ liked: -1 });
  };

  render() {
    const { activePhoto } = this.props;
    const { liked } = this.state;

    return (
      <div className={styles.container}>
        {activePhoto && (
          <Fragment>
            <div className={styles.title_like}>
              <Typography component="h1" variant="h1" color="textPrimary">
                {`Фото: ${activePhoto.name}`}
              </Typography>
              <div>
                <IconButton
                  color={liked === -1 ? "secondary" : "inherit"}
                  disableRipple
                  onClick={() => this.dislike(activePhoto._id)}>
                  <ThumbdownIcon />
                </IconButton>
                <IconButton
                  color={liked === 1 ? "secondary" : "inherit"}
                  disableRipple
                  onClick={() => this.like(activePhoto._id)}>
                  <ThumbupIcon />
                </IconButton>
              </div>
            </div>
            <div className={styles.rating_author}>
              <Typography component="h2" variant="h2" color="textPrimary">
                {`Рейтинг: ${activePhoto.rating}`}
              </Typography>
              <Typography component="h2" variant="h2" color="textPrimary">
                {`Автор: ${activePhoto.author.login}`}
              </Typography>
            </div>
            <div className={styles.image}>
              <img src={activePhoto.url} alt={activePhoto.name} />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

Image.propTypes = {
  selectPhoto: PropTypes.func.isRequired,
  updatePhotoRating: PropTypes.func.isRequired,
  activePhoto: PropTypes.any,
};

export default Image;
