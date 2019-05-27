import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./ImageItem.module.scss";

class ImageItem extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    if (this.imageRef.current) {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10) + 1;
      this.setState({ spans });
    }
    return;
  };

  render() {
    const { url, _id, name } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Link to={`/photo/${_id}`}>
          <img ref={this.imageRef} src={url} alt={name} />
        </Link>
      </div>
    );
  }
}

export default ImageItem;
