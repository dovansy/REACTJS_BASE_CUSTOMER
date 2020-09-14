import React, { Component } from "react";
import SideBar from "@components/SideBar";
import PaymentGuideComponent from "@components/PaymentGuideComponent";
import "../styles/sideBar.css";
import Header from "@components/Header";

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <div
            className="container-fluid text-center py-3"
            style={{
              backgroundColor: "#33a6b9",
              color: "white",
              fontFamily: "sans-serif",
              fontSize: 50,
            }}
          >
            <span>Chính sách bảo mật</span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-1 col-lg-3 my-div">
                <SideBar />
              </div>
              <div className="col-12 col-lg-9">
                <PaymentGuideComponent />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
