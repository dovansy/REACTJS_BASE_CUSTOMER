import React, { Component } from "react";
import Order from "../components/Order";
import Header from "@components/Header";
class OrderScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Order />
      </>
    );
  }
}
export default OrderScreen;
