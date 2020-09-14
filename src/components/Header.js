import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { ROUTER } from "@constants/Constant";
import { STRINGS } from "@constants/Strings";
import "../styles/footer.css";
// import "./Header.css"
// import {Dropdown} from 'react-bootstrap'
// import NavBar from 'NavBar';
// import Slide from 'Slide';
import Nav from "./Nav";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <header
          style={{
            top:0,
            position: "-webkit-sticky",
            position: "-ms-sticky",
            position:"-moz-sticky",
            position: "sticky",
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <div className="container p-0">
              <Nav/>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
