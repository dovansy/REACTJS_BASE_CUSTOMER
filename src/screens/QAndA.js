import React, { Component } from "react";
import SideBar from "@components/SideBar";
import QAndAComponent from "@components/QAndAComponent";
import "../styles/sideBar.css";
import Error from "@src/components/Error";
import LoadingAction from "@src/components/LoadingAction";
import Header from "@components/Header";

export default class QAndA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }
  render() {
    const { isLoading, error } = this.state;
    return (
      <>
        <Header />
        <div>
          {isLoading && <LoadingAction />}
          <Error isOpen={error} />
          <div
            className="container-fluid text-center py-3"
            style={{
              backgroundColor: "#33a6b9",
              color: "white",
              fontFamily: "sans-serif",
              fontSize: 50,
            }}
          >
            <span>Các câu hỏi thường gặp</span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-1 col-lg-3 my-div">
                <SideBar />
              </div>
              <div className="col-12 col-lg-9">
                <QAndAComponent />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
