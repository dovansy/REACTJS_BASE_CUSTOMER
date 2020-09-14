import React from "react";
import "../styles/footer.css";
import { withRouter, NavLink, Link } from "react-router-dom";
// import { ROUTER } from "../constants/Constant";
import { ROUTER, STRING } from "@constants/Constant";
import urlImage from "../assets/img_logo.png";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: "",
    };
  }

  componentDidMount() {
    this.setState({
      pathName: window.location.pathname,
    });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  render() {
    return (
      /* footer for website*/
      <footer
        className="container-fluid"
        style={{ width: "100%", backgroundColor: "#121212", height: "100%" }}
      >
        <div className="container pt-2 ">
          <div
            className="row"
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 20,
            }}
          >
            <div
              className="col-12 col-md-10 row my-3"
              style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: 25,
              }}
            >
              <a className="navbar-brand col-8 col-lg-2">
                <img
                  src={urlImage}
                  alt="logo"
                  className="pb-3"
                  style={{ height: "80px" }}
                />
              </a>
              <span className="pb-1 mt-4">
                HỆ THỐNG VẬN CHUYỂN TẠI VIỆT NAM
              </span>
            </div>
            <div
              className="col-10 mx-auto line"
              style={{
                borderTop: "1px solid #938f7c",
              }}
            ></div>
          </div>
          <div className="row mt-5" style={{ color: "#fff" }}>
            <div
              className="col-12 col-md-6 col-lg-3"
              style={{ marginBottom: 50 }}
            >
              <div
                className="col-6 mx-0 px-0 mb-3"
                style={{
                  borderBottom: "1px solid #938f7c",
                }}
              >
                <p className="my-footer ">LIÊN HỆ</p>
              </div>
              <Link
                // to={ROUTER.INTRODUCE}
                className="footer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <a>
                  <p className="my-size-text">HOT LINE: 0964 66 33 99</p>
                </a>
              </Link>
              <Link
                to={ROUTER.CONTACT}
                className="footer"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <a>
                  <p className="my-size-text"> EMAIL: CSKH@vitrans.com</p>
                </a>
              </Link>
            </div>
            <div
              className="col-12 col-md-6 col-lg-3"
              style={{ marginBottom: 50 }}
            >
              <div
                className="col-7 mx-0 px-0 mb-3"
                style={{
                  borderBottom: "1px solid #938f7c",
                }}
              >
                <p className="my-footer">Về Vitrans</p>
              </div>
              <Link
                to={ROUTER.INTRODUCE}
                className="footer"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <a>
                  <p className="my-size-text">Về chúng tôi</p>
                </a>
              </Link>
              <Link
                to={ROUTER.OPERATION_REGULATION}
                className="footer"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <a>
                  <p className="my-size-text">Quy chế hoạt động</p>
                </a>
              </Link>
            </div>
            <div
              className="col-12 col-md-6 col-lg-3"
              style={{ marginBottom: 50 }}
            >
              <div
                className="col-8 mx-0 px-0 mb-3"
                style={{
                  borderBottom: "1px solid #938f7c",
                }}
              >
                <p className="my-footer">Chính sách</p>
              </div>

              <Link
                to={ROUTER.WARRANTY_PERSONAL}
                className="footer"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <a>
                  <p className="my-size-text">Chính sách bảo hiểm cá nhân</p>
                </a>
              </Link>
              <Link
                to={ROUTER.PRIVACY_POLICY}
                className="footer"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <a>
                  <p className="my-size-text">Chính sách bảo mật</p>
                </a>
              </Link>
            </div>
            <div
              className="col-12 col-md-6 col-lg-3"
              style={{ marginBottom: 50 }}
            >
              <div
                className="col-3 mx-0 px-0 mb-3"
                style={{
                  borderBottom: "1px solid #938f7c",
                }}
              >
                <p className="my-footer">Faq</p>
              </div>
              <Link
                to={ROUTER.ORDER_GUIDE}
                className="footer"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <a>
                  <p className="my-size-text">Hướng dẫn mua hàng gửi hàng</p>
                </a>
              </Link>
              <Link
                to={ROUTER.PAYMENT_GUIDE}
                className="footer"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <a>
                  <p className="my-size-text">Hướng dẫn thanh toán</p>
                </a>
              </Link>
              <Link
                to={ROUTER.Q_AND_A}
                className="footer"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <a>
                  <p className="my-size-text">Các câu hỏi thường gặp</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
