import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { ROUTER, STRING } from "@constants/Constant";
import "../styles/sideBar.css";

class SideBar extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  render() {
    const { push } = this.props.history;
    const { user, active } = this.state;
    const pathName = window.location.pathname;
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4 me-sidebar">
        {/* Sidebar */}
        <div className="sidebar me-sidebar">
          {/* Sidebar Menu */}
          <nav className="my-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <div
                className="mt-2 mb-2 ml-3"
                style={{ fontSize: 22, fontWeight: "bold" }}
              >
                <a>Về Vitrans</a>
                <div
                  className="col-2"
                  style={{ borderBottom: "2px solid #33a6b9" }}
                ></div>
              </div>
              <li
                className={
                  pathName.search("quy-che-hoat-dong") !== -1
                    ? "nav-item actived hoved"
                    : "nav-item hoved"
                }
                onClick={() => {
                  push(ROUTER.OPERATION_REGULATION);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <a className="nav-link cursor nav-link-hover">
                  <p className="me-txt-menu">Quy chế hoạt động</p>
                </a>
              </li>
              <div
                className="mt-2 mb-2 ml-3"
                style={{ fontSize: 22, fontWeight: "bold" }}
              >
                <a>Chính sách</a>
                <div
                  className="col-2"
                  style={{ borderBottom: "2px solid #33a6b9" }}
                ></div>
              </div>
              <li
                className={
                  pathName.search("chinh-sach-bao-hiem-ca-nhan") !== -1
                    ? "nav-item actived hoved"
                    : "nav-item hoved"
                }
                onClick={() => {
                  push(ROUTER.WARRANTY_PERSONAL);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <a className="nav-link cursor nav-link-hover">
                  <p className="me-txt-menu">Chính sách bảo hiểm cá nhân</p>
                </a>
              </li>

              <li
                className={
                  pathName.search("chinh-sach-bao-mat") !== -1
                    ? "nav-item actived hoved"
                    : "nav-item hoved"
                }
                onClick={() => {
                  push(ROUTER.PRIVACY_POLICY);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <a className="nav-link cursor nav-link-hover">
                  <p className="me-txt-menu">Chính sách bảo mật</p>
                </a>
              </li>
              <div
                className="mt-2 mb-2 ml-3"
                style={{ fontSize: 22, fontWeight: "bold" }}
              >
                <a>Faq</a>
                <div
                  className="col-2"
                  style={{ borderBottom: "2px solid #33a6b9" }}
                ></div>
              </div>
              <li
                className={
                  pathName.search("huong-dan-dat-hang") !== -1
                    ? "nav-item actived hoved"
                    : "nav-item hoved"
                }
                data-widget={this.state.width < 990 && "pushmenu"}
                onClick={() => {
                  push(ROUTER.ORDER_GUIDE);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <a className="nav-link cursor nav-link-hover">
                  <p className="me-txt-menu">Hướng dẫn đặt hàng</p>
                </a>
              </li>

              <li
                className={
                  pathName.search("huong-dan-thanh-toan") !== -1
                    ? "nav-item actived "
                    : "nav-item"
                }
                data-widget={this.state.width < 990 && "pushmenu"}
                onClick={() => {
                  push(ROUTER.PAYMENT_GUIDE);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <a className="nav-link cursor nav-link-hover">
                  <p className="me-txt-menu">Hướng dẫn thanh toán</p>
                </a>
              </li>
              <li
                className={
                  pathName.search("cau-hoi-thuong-gap") !== -1
                    ? "nav-item actived hoved"
                    : "nav-item hoved"
                }
                data-widget={this.state.width < 990 && "pushmenu"}
                onClick={() => {
                  push(ROUTER.Q_AND_A);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <a className="nav-link cursor nav-link-hover">
                  <p className="me-txt-menu">Các câu hỏi thường gặp</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default withRouter(SideBar);
