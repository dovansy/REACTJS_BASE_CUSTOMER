import React from "react";
import "../styles/home.css";
class Home extends React.Component {
  render() {
    return (
      /* this is home-page for web  */
      // <main>
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-6 mx-auto">
              <h3 className="text-center mt-5" style={{ fontWeight: "bold" }}>
                TẠI SAO NÊN LỰA CHỌN VITRANS?
              </h3>
            </div>
          </div>
          <div className="row mt-2">
            <div
              className="col-1 mx-auto line"
              style={{ borderTop: "3px solid #ff9f43" }}
            ></div>
          </div>
        </div>
        <div className="container mt-5 block-qa">
          <div className="row mt-5">
            <div className="row d-flex justify-content-between">
              <div className="my-style mt-3">
                <div className="row d-flex justify-content-between ">
                  <div className="col-4 pr-0">
                    <img src="./images/icon1.png" alt="icon1" />
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">
                      VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG, AN TOÀN
                    </span>
                    <div className="mt-3">
                      Thời gian từ lúc gửi đến lúc nhận hàng trong vòng 1-3
                      ngày.
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-style mt-3">
                <div className="row d-flex justify-content-between">
                  <div className="col-4 pr-0">
                    <img src="./images/icon2.png" alt="icon1" />
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">
                      VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG, AN TOÀN
                    </span>
                    <div className="mt-3">
                      Với hệ thống theo dõi đơn hàng tiện lợi, quý khách có thể
                      cập nhật vị trí hàng hóa mọi lúc mọi nơi.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="mt-3 my-style">
                <div className="row d-flex justify-content-between">
                  <div className="col-4 pr-0">
                    <img src="./images/icon2.png" alt="icon1" />
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">
                      VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG, AN TOÀN
                    </span>
                    <div className="mt-3">
                      Thời gian từ lúc gửi đến lúc nhận hàng trong vòng 1-3
                      ngày.
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-3 my-style">
                <div className="row d-flex justify-content-between">
                  <div className="col-4 pr-0">
                    <img
                      src="./images/icon1.png"
                      alt="icon1"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">
                      VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG, AN TOÀN
                    </span>
                    <div className="mt-3">
                      Với hệ thống theo dõi đơn hàng tiện lợi, quý khách có thể
                      cập nhật vị trí hàng hóa mọi lúc mọi nơi.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container mt-5">
            <div className="row ">
              <div className="col-12 col-md-6 mx-auto mt-5">
                <h3 className="text-center mt-5" style={{ fontWeight: "bold" }}>
                  DỊCH VỤ VẬN CHUYỂN
                </h3>
              </div>
            </div>
            <div className="row mt-2">
              <div
                className="col-1 mx-auto line"
                style={{ borderTop: "3px solid #ff9f43" }}
              ></div>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row d-flex justify-content-between">
              <div className="col-12 col-md-3 bg-white mb-5 py-4 text-center  my-style-news">
                <div>
                  <img
                    src="./images/image1.png"
                    alt=""
                    className="mb-4 pt-5 col-12"
                  />
                  <span className="font-weight-bold">Vận chuyển liên tỉnh</span>
                  {/* <button
                    type="button"
                    id="button"
                    className="btn button mt-4"
                    style={{ backgroundColor: "#ff9f43" }}
                  >
                    Xem thêm
                  </button> */}
                </div>
              </div>
              <div className="col-12 col-md-3 bg-white mb-5 py-4 text-center  my-style-news">
                <div>
                  <img
                    src="./images/card-2.png"
                    alt=""
                    className="mb-4 pt-5 col-12"
                    // style={{ maxWidth:"100%"}}
                  />
                  <span className="font-weight-bold">Vận chuyển liên tỉnh</span>
                </div>
              </div>
              <div className="col-12 col-md-3 bg-white mb-5 py-4 text-center  my-style-news">
                <div>
                  <img
                    src="./images/card-3.png"
                    alt=""
                    className="mb-4 pt-5 col-12"
                  />
                  <span className="font-weight-bold">Vận chuyển liên tỉnh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
