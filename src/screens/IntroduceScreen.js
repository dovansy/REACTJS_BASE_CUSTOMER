import React, { Component } from "react";
import Introduce from "../components/Introduce";
import Header from "@components/Header";
class IntroduceScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Introduce />
      </>
    );
  }
}
export default IntroduceScreen;
