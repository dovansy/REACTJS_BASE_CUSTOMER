import React, { Component } from "react";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          height: 300,
          fontFamily: "sans-serif",
        }}
      >
        {/* <span style={{ fontSize: 100 }}> 404</span> */}
        <img
          src="./images/img_logo.png"
          alt="logo"
          className="pb-3 mr-5"
          style={{ height: "90px" }}
        />
        <h1>Vui lòng thử lại sau!</h1>
      </div>
    );
  }
}
