import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import styles from "./Image.module.scss";

class Image extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { selectPhoto } = this.props;
    if (id) {
      selectPhoto(id);
    }
  }

  render() {
    const { activePhoto } = this.props;
    return (
      <div className={styles.container}>
        {activePhoto && (
          <Fragment>
            <div className={styles.title}>
              <Typography component="h1" variant="h1" color="textPrimary">
                {`Фото: ${activePhoto.name}`}
              </Typography>
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

export default Image;
