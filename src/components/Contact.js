import React from "react";
import { STRINGS } from "@constants/Strings";
import "../styles/contact.css";
import urlImage from "../assets/contact.png";
class Contact extends React.Component {
  render() {
    return (
      <div className="container mt-5 ">
        <div
          className="row my-contact p-3"
          style={{
            color: "#1A8EA9",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          <div className="col-12 mb-4 mt-5">
            <div
              className="col-12 col-md-6"
              style={{
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <span>{STRINGS.TITLE}</span>
            </div>
          </div>
          <div className="col-12 col-md-6 p-0">
            <form>
              <div className="form-group col-12">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                  placeholder="Họ và tên"
                  required
                />
              </div>
              <div className="form-group col-12">
                <input
                  type="email"
                  className="form-control"
                  id="usr"
                  name="username"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group col-12">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="form-group col-12">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={8}
                  placeholder="Lời nhắn..."
                />
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6 p-0">
            <img
              src={urlImage}
              alt="logo"
              className="pb-3 mr-5"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-12 text-center mt-5">
            <div
              className="col-12 mx-auto pb-5"
              // style={{ borderBottom: "2px solid #fbbd10" }}
            >
              <button
                type="submit"
                className="btn button"
                style={{
                  backgroundColor: "#ff9f43",
                  borderRadius: "2rem",
                  width: "150px",
                }}
              >
                <i
                  className="fa fa-paper-plane-o fa-1x mr-1"
                  aria-hidden="true"
                />
                Gửi
              </button>
              <div
                className="col-2 mx-auto pb-5"
                style={{ borderBottom: "2px solid #fbbd10" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col-12 mb-3"
            style={{ color: "#1A8EA9", fontWeight: "bold", fontSize: 25 }}
          >
            <span>Thông tin kho hàng</span>
          </div>
          <div className="col-12">
            <ul className="ml-5">
              <li className="mb-2">
                Kho Hà Nội : số 19, ngõ 12, đường Phan Văn Trường, Cầu Giấy, Hà
                Nội
              </li>
              <li className="mb-2">
                Kho Đà Nẵng : k42/34 Nguyễn Thanh Hãn, Hải Châu, Đà Nẵng
              </li>
              <li className="mb-2">
                Kho Hồ Chí Minh : số 50 đường T4B, Tây Thạnh, Tân Phú, Hồ Chí
                Minh
              </li>
              <li className="mb-5">Hotline: 0964 66 33 99</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
