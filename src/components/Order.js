import React from "react";

class Order extends React.Component {
  render() {
    /* header for website
     */
    return (
      <div className="container mt-3">
        <div className="row mb-5">
          <div className="col-12">
            <h4 className="mb-3">
              <a href>Đơn hàng vpt 01_03_02_25896</a>
            </h4>
          </div>
          <div className="col-12 col-md-6">
            <h6>Thông tin người gửi</h6>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Họ và tên *</p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Số điện thoại *</p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Địa chỉ </p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Địa chỉ cụ thể</p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-6-md">
                <h6>Thông tin đơn hàng</h6>
              </div>
              <div className="col-12 col-6-md">
                <span>Hình thức thanh toán</span>
              </div>
              <form action="/action_page.php" className="pl-3 mt-3">
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optradio"
                    />
                  </label>
                  <span className="mb-1">Trả trước</span>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optradio"
                    />
                  </label>
                  <span className="mb-1">Trả trước</span>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label" htmlFor="check2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check2"
                      name="vehicle2"
                      defaultValue="something"
                    />
                  </label>
                  <span className="mb-1">Thu hộ</span>
                </div>
              </form>
            </div>
            <div className="row mt-3">
              <div className="col-3 pt-1">
                <p>Số tiền thu hộ</p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Cân nặng</p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Giá trị đơn hàng</p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Chi phí dự kiến</p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                />
              </div>
            </div>
            <div className="row mt-2" style={{ color: "#bf9000" }}>
              <form action="/action_page.php" className="pl-3 mt-3">
                <div className="form-check-inline checkbox-warning ">
                  <label className="form-check-label" htmlFor="check2">
                    <input
                      type="checkbox"
                      className="form-check-input "
                      id="check2"
                      name="vehicle2"
                      defaultValue="something"
                    />
                  </label>
                  <span className="mb-1">Hàng dễ vỡ</span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h6>Thông tin người nhận</h6>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Họ và tên *</p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Số điện thoại *</p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Địa chỉ </p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Địa chỉ cụ thể</p>
              </div>
              <div className="col-9 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  name="username"
                />
              </div>
            </div>
            <div className="row" style={{ marginTop: "45px" }}>
              <div className="col-3 pt-1">
                <p>Mô tả</p>
              </div>
              <div className="col-9 form-group">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Ghi chú</p>
              </div>
              <div className="col-9 form-group">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-1">
                <p>Ảnh xác nhận</p>
              </div>
              <div className="col-9 form-group">
                <i className="fa fa-picture-o fa-2x " aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-12 text-center mt-5">
            <button type="button" className="btn button">
              HOÀN THÀNH
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
