import React, { Component } from "react";
import Contact from "../components/Contact";
import Header from "@components/Header";
class ContactScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Contact />
      </>
    );
  }
}
export default ContactScreen;
