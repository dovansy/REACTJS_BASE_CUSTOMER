import React from "react";
import urlImage from "../assets/background.png";

class Slide extends React.Component {
  render() {
    return (
      /** this is logo for web site*/
      <>
        <div style={{ textAlign: "center" }}>
          <img
            className
            src={urlImage}
            alt="slide"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </>
    );
  }
}

export default Slide;
