import React from "react";

class Introduce extends React.Component {
  render() {
    /* introduce about website
     */
    return (
      <div
        className="container mt-5 mb-4"
        style={{
          paddingTop: 20,
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          className="row mb-4"
          style={{
            justifyContent: "center",
            fontWeight: "bold",
            color: "#1A8EA9",
            fontSize: 25,
          }}
        >
          <span>GIỚI THIỆU VITRANS</span>
        </div>
        <div className="row ">
          <div className="col-12">
            <ul className="mx-auto" style={{ listStyle: "none" }}>
              <li className="mb-3">
                VITRANS là hệ thống chuyển hàng hóa tại việt nam, với hệ thống
                vận chuyển của chúng tôi có thể giúp quý khách hàng:
              </li>
              <li className="mb-3">
                Quý khách hàng có thể gửi các loại hàng hóa(nằm trong danh sách
                các loại hàng được phép) trên lãnh thổ việt nam
              </li>
              <li className="mb-3">
                Hệ thống VITRANS sẽ giúp việc mua và gửi hàng hóa trở nên đơn
                giản hơn bao giờ hết
              </li>
            </ul>
          </div>
        </div>
        <div
          className="row mt-5 mb-4"
          style={{
            justifyContent: "center",
            fontWeight: "bold",
            color: "#1A8EA9",
            fontSize: 25,
          }}
        >
          <span>SỨ MỆNH VÀ TẦM NHÌN</span>
        </div>
        <div className="row">
          <div className="col-12 mb-5">
            <ul className="ml-5 mx-auto" style={{ listStyle: "none" }}>
              <li className="mb-3">
                Quý khách hàng có thể gửi các loại hàng hóa(nằm trong danh sách
                các loại hàng được phép) trên lãnh thổ việt nam
              </li>
              <li className="mb-3">
                Hệ thống VITRANS sẽ giúp việc mua và gửi hàng hóa trở nên đơn
                giản hơn bao giờ hết
              </li>
              <li className="mb-3">
                Quý khách hàng có thể gửi các loại hàng hóa(nằm trong danh sách
                các loại hàng được phép) trên lãnh thổ việt nam
              </li>
              <li className="mb-3">
                Hệ thống VITRANS sẽ giúp việc mua và gửi hàng hóa trở nên đơn
                giản hơn bao giờ hết
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduce;
