import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchOrder } from "../constants/Api";
import { toDateString } from "../components/toDateString";
import { ROUTER } from "../constants/Constant";
import Error from "@src/components/Error";
import LoadingAction from "@src/components/LoadingAction";
import reactotron from "src/ReactotronConfig";
import Header from "@components/Header";

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCode: "",
      order: null,
      isLoading: false,
      error: null,
      isShowTextEmpty: false,
    };
  }

  componentDidMount() {
    const { value } = this.props.match.params;
    this.setState(
      {
        orderCode: value,
      },
      () => {
        if (value) this.searchOrder(value);
      }
    );
  }

  async searchOrder(payload) {
    this.setState({
      isLoading: true,
    });
    try {
      const res = await searchOrder(payload);
      this.setState({
        order: res.data,
        isLoading: false,
        isShowTextEmpty: !res.data.length,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        isLoading: false,
        error: err,
      });
    }
  }

  handleKeyPress = (e) => {
    const { orderCode } = this.state;
    const { push } = this.props.history;
    if (e.key === "Enter") {
      this.searchOrder(orderCode);
      push({
        pathname: `${ROUTER.SEARCHORDER}/${orderCode}`,
      });
    }
  };

  handleChange = (fieldName, value) => {
    this.setState({
      ...this.state,
      [fieldName]: value || "",
      isShowTextEmpty: false,
    });
  };

  render() {
    // console.log(this.props.match.params.value);
    const { push } = this.props.history;
    const { orderCode, order, isShowTextEmpty, isLoading, error } = this.state;
    return (
      <>
        <Header></Header>
        {isLoading && <LoadingAction />}
        <Error isOpen={error} />
        <div className="container mt-4" style={{ marginBottom: "150px" }}>
          <div className="row">
            <div
              className="col-12 mb-4"
              style={{ fontSize: 25, color: "#1A8EA9", fontWeight: "bold" }}
            >
              <span>TRA CỨU ĐƠN HÀNG</span>
            </div>
            <div className="col-12 col-md-2 mt-1">
              <span className="font-weight-bold">Nhập mã đơn hàng</span>
            </div>
            <div className=" col-12 col-md-6">
              <form>
                <div className="form-group">
                  <input
                    onKeyPress={this.handleKeyPress}
                    type="text"
                    className="form-control"
                    id="usr"
                    value={orderCode}
                    onChange={(e) =>
                      this.handleChange("orderCode", e.target.value)
                    }
                  />
                </div>
              </form>
            </div>
            <div className="col-12 col-md-4 ">
              <button
                style={{ backgroundColor: "#ff9f43" }}
                type="button"
                className="btn btn-primary text-white"
                onClick={() => {
                  this.searchOrder(orderCode);
                  push(ROUTER.SEARCHORDER + "/" + orderCode);
                }}
              >
                Tìm kiếm
              </button>
              <i className="search"></i>
            </div>
          </div>
          <div>
            {isShowTextEmpty && orderCode && (
              <p>{`Không tìm thấy đơn hàng ${this.state.orderCode}`}</p>
            )}
          </div>
          <div className="row mt-5">
            <table
              className="table table-bordered mb-5 table-responsive-sm table-responsive-md"
              style={{ textAlign: "center" }}
            >
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã đơn hàng</th>
                  <th>Kiện hàng</th>
                  <th>Gom hàng</th>
                  <th>Người gửi</th>
                  <th>Người nhận</th>
                  <th>Phí vận chuyển</th>
                  <th>Trạng thái</th>
                  <th>Ngày đặt</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {order?.map((item, index) => (
                  <tr>
                    <td>{index + 1 || "--"}</td>
                    <td>{item.ORDER_CODE || "--"}</td>
                    <td>{item.PACK_CODE || "--"}</td>
                    <td>{item.COLLECTOR_NAME || "--"}</td>
                    <td>{item.SENDER_NAME || "--"}</td>
                    <td>{item.RECEIVER_NAME || "--"}</td>
                    <td>
                      {item.EST_FEE?.toLocaleString("vi", {
                        currency: "VND",
                      }) + "(VNĐ)" || "--"}
                    </td>
                    <td>{item.MOVE_STATUS_CONTENT || "--"}</td>
                    <td>{toDateString(item.CREATED_DATE) || "--"}</td>
                    <td className="width2btn">
                      <Link to={ROUTER.ORDER_DETAIL + "/" + item.ORDER_ID}>
                        <i
                          className="btnInfo fa fa-info-circle"
                          style={{
                            fontSize: "24px",
                            color: "#1896a3",
                            cursor: "pointer",
                          }}
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
export default SearchScreen;
