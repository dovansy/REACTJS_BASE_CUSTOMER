import React from "react";

class SearchOrder extends React.Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 title p-0">
            <h4>
              <a href>Đơn hàng VPT_01_05_07_25896</a>
            </h4>
          </div>
          <div className="col-12 mt-4 p-0">
            <h6>Thông tin Khách hàng</h6>
          </div>
          <div className="col-12 col-md-6 p-0">
            <span className="font-weight-bold">Người Gửi</span>
            <div className="row mt-3">
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <span>Họ và tên</span>
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">Lê văn thành</span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <span>Số điệnt thoại</span>
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">3013017831</span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <span>địa chỉ</span>
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">
                      Số 20, nguyễn trãi thanh xuân hà nội
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="font-weight-bold">Người nhận</span>
            <div className="row mt-3">
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <span>Họ và tên</span>
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">Lê văn thành</span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <span>Số điệnt thoại</span>
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">3013017831</span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <span>địa chỉ</span>
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">
                      Số 20, nguyễn trãi thanh xuân hà nội
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <div className="row">
              <span className="font-weight-bold">Thông tin đơn hàng</span>
              <div className="row mt-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <span>Mã đơn hàng</span>
                    </div>
                    <div className="col-8">
                      <span className="font-weight-bold">
                        VPT_01_05_07_25896
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <span>Cân nặng</span>
                    </div>
                    <div className="col-8">
                      <span className="font-weight-bold">5 kg</span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <span>Giá trị</span>
                    </div>
                    <div className="col-8">
                      <span className="font-weight-bold">20.000.000 đ</span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <span>Hình thức thanh toán</span>
                    </div>
                    <div className="col-8">
                      <span className="font-weight-bold">Trả trước</span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <span>Phí vẫn chuyển</span>
                    </div>
                    <div className="col-8">
                      <span className="font-weight-bold">50.000 VNĐ</span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <span>Trạng thái thanh toán</span>
                    </div>
                    <div className="col-8">
                      <span className style={{ color: "#14ac79" }}>
                        Đã thanh toán
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <div className="row">
              <div className="row mt-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <span>Mô tả</span>
                    </div>
                    <div className="col-8">
                      <span>Chưa cập nhật</span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <span>Ghi chú</span>
                    </div>
                    <div className="col-8">
                      <span>Chưa cập nhật</span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12">
                      <span>Ảnh xác nhận</span>
                    </div>
                    <div className="col-12">
                      <i className="fa fa-picture-o fa-2x" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5 ">
            <div className="row mt-3">
              <span className="mb-3 font-weight-bold">
                Trạng thái vận chuyển
              </span>
              <table className="table table-bordered mb-5">
                <thead>
                  <tr>
                    <th>Stt</th>
                    <th>Trạng thái</th>
                    <th>Người cập nhật</th>
                    <th>Ngày cập nhật</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Đã nhập kho hải phòng</td>
                    <td>Nguyễn minh anh</td>
                    <td>13:30 25-12-2019</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Đã nhập kho hải phòng</td>
                    <td>Nguyễn minh anh</td>
                    <td>13:30 25-12-2019</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Đã nhập kho hải phòng</td>
                    <td>Nguyễn minh anh</td>
                    <td>13:30 25-12-2019</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Đã nhập kho hải phòng</td>
                    <td>Nguyễn minh anh</td>
                    <td>13:30 25-12-2019</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Đã nhập kho hải phòng</td>
                    <td>Nguyễn minh anh</td>
                    <td>13:30 25-12-2019</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Đã nhập kho hải phòng</td>
                    <td>Nguyễn minh anh</td>
                    <td>13:30 25-12-2019</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Đã nhập kho hải phòng</td>
                    <td>Nguyễn minh anh</td>
                    <td>13:30 25-12-2019</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchOrder;
