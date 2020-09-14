import React from "react";
import ReactDOM from "react-dom";
import "../styles/modal-image.css";

export default class ModalImage extends React.Component {
  constructor(props) {
    super(props);
    const ratioWHArray = this.props.ratio.split(":");
    this.ratioWH = ratioWHArray[0] / ratioWHArray[1];

    this.updateDimensions = this.updateDimensions.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.modalElm.style.display = "inline-block";
  }

  hideModal() {
    this.modalElm.style.display = "none";
  }

  updateDimensions() {
    this.imageElm.style.height = `${
      this.imageElm.offsetWidth / this.ratioWH
    }px`;
  }
  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this);
    this.imageElm = this.rootElm.querySelector(".image");
    this.modalElm = this.rootElm.querySelector(".modal");

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className="lp-modal-image">
        <img
          className="image"
          src={this.props.src}
          alt={this.props.alt}
          onClick={this.showModal}
        />

        <div className="modal" onClick={this.hideModal}>
          <span
            className="close"
            onClick={this.hideModal}
            style={{ marginTop: 50 }}
          >
            ×
          </span>
          <img
            className="modal-content"
            src={this.props.src}
            alt={this.props.alt + " modal"}
            style={{ marginTop: 130 }}
          />
          <div className="caption">{this.props.alt}</div>
        </div>
      </div>
    );
  }
}
