import React, { Component } from "react";
import Home from "../components/Home";
import Slide from "../components/Slide";
import Header from "@components/Header";
export default class HomeScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Slide />
        <Home />
      </>
    );
  }
}
