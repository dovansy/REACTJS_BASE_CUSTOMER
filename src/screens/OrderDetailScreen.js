import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { STRING } from "@constants/Constant";
import { toDateString } from "../components/toDateString";
import { getOrderDetail } from "@constants/Api";
import ModalImage from "../components/modal-image";
import Loading from "@src/components/Loading";
import Error from "@src/components/Error";
import LoadingAction from "@src/components/LoadingAction";
import Header from "@components/Header";
import reactotron from "reactotron-react-js";
export default class OrderDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      orderInfo: {},
      orderShipHistory: {},
      isLoading: false,
      error: null,
      pdf: false,
      QRCode: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const {
      match: { params },
    } = this.props;
    this.setState({
      isLoading: true,
    });
    try {
      const res = await getOrderDetail(params.id);
      this.setState({
        orderInfo: res?.data,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        error: err,
        isLoading: false,
      });
    }
  }

  renderBody() {
    return (
      <div className="content-wrapper">
        <div className="content-header">{this.renderTab()}</div>
      </div>
    );
  }

  renderTab() {
    const { orderInfo } = this.state;
    const {
      match: { params },
    } = this.props;
    return (
      <div className="container mt-5 mb-5">
        <a
          className="driver-name-block"
          onClick={() => this.props.history.goBack()}
          style={{ color: "#1A8EA9", cursor: "pointer" }}
        >
          {/* <i className="fas fa-chevron-left"></i> */}
          <i
            className="fa fa-chevron-left"
            aria-hidden="true"
            style={{ fontSize: 20 }}
          ></i>
          <span
            className="lead header driver-name"
            style={{ fontSize: 25, color: "#1A8EA9", fontWeight: "bold" }}
          >
            {orderInfo.ORDER_CODE ? " Đơn hàng " + orderInfo.ORDER_CODE : ``}
          </span>
        </a>
        <div>
          {this.renderInforClient()}
          {this.renderInforOrder()}
          {this.renderStatusShipTable()}
        </div>
      </div>
    );
  }

  renderInforClient = () => {
    const { orderInfo } = this.state;
    return (
      <div style={{ margin: 10, marginTop: 30 }}>
        <h6>
          <span className="font-weight-bold">{STRING.clientInfor}</span>
        </h6>
        <div className="row" style={{ paddingLeft: "20px" }}>
          <Col>
            <Row>
              <p>
                <span className="font-weight-bold">Người gửi</span>
              </p>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.fullname}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo?.SENDER_NAME || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.phoneNumber}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo?.SENDER_PHONE || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.address}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo?.SENDER_ADDRESS_MAPS || "--"}
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <p>
                <span className="font-weight-bold">Người nhận</span>
              </p>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.fullname}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo?.RECEIVER_NAME || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.phoneNumber}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo?.RECEIVER_PHONE || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.address}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo?.RECEIVER_ADDRESS_MAPS || "--"}
                </p>
              </Col>
            </Row>
          </Col>
        </div>
      </div>
    );
  };

  renderInforOrder = () => {
    const { orderInfo } = this.state;
    reactotron.log(orderInfo);
    return (
      <div style={{ margin: 10 }}>
        <h6>
          <span className="font-weight-bold">Thông tin đơn hàng</span>
        </h6>
        <div className="row" style={{ paddingLeft: "20px" }}>
          <Col>
            <Row>
              <Col sm={4}>
                <p>{STRING.orderCode}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo.ORDER_CODE || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>Mã kiện gộp</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo.PACK_CODE || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.weight}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo.WEIGHT + "(kg)" || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.length}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">{orderInfo?.SIZE || "--"}</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.value}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo.AMOUNT == null
                    ? "--"
                    : orderInfo.AMOUNT?.toLocaleString("vi", {
                        currency: "VND",
                      }) + "(VNĐ)"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.paymentType}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo.PAYMENT_TYPE === 0
                    ? "Trả trước"
                    : "Trả sau" || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.shippingFee}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo.EST_FEE?.toLocaleString("vi", {
                    currency: "VND",
                  }) + "(VNĐ)" || "--"}
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col sm={4}>
                <p>Lộ trình</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo.ROUTE_NAME || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.description}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo.DESCRIPTION || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.note}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">{orderInfo.NOTE || "--"}</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.collector}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {orderInfo.COLLECTOR_NAME || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.collectionDate}</p>
              </Col>
              <Col sm={8}>
                <p className="font-weight-bold">
                  {toDateString(orderInfo.CREATED_DATE) || "--"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p>{STRING.avatar}</p>
              </Col>
              <Col sm={8}>
                <span>
                  <div
                    style={{
                      width: 200,
                      height: 120,
                    }}
                  >
                    <ModalImage
                      src={orderInfo.IMAGE_URL}
                      alt="ảnh xác minh"
                      ratio={`3:2`}
                    />
                  </div>
                </span>
              </Col>
            </Row>
          </Col>
        </div>
      </div>
    );
  };

  renderStatusShipTable() {
    return (
      <Col>
        <p className="medium font-weight-bold">Trạng thái vận chuyển</p>
        <table
          id="example2"
          className="table table-bordered table-striped table-responsive-sm table-responsive-md"
        >
          <thead className="text-center bg-thead">
            <tr>
              <th>STT</th>
              <th>{STRING.status}</th>
              {/* <th>{STRING.userUpdate}</th> */}
              <th>{STRING.updateDate}</th>
            </tr>
          </thead>
          {this.renderStatusShipTableData()}
        </table>
      </Col>
    );
  }

  renderStatusShipTableData() {
    const { orderInfo } = this.state;
    return (
      <tbody className="text-center bg-thead">
        {orderInfo?.LIST_STATUS?.map((value, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              {value.ORDER_MOVE_STATUS == 1
                ? "CSKH tạo đơn"
                : value.ORDER_MOVE_STATUS == 2
                ? "Gom hàng tạo đơn"
                : value.ORDER_MOVE_STATUS == 3
                ? "Shipper nhận đơn"
                : value.ORDER_MOVE_STATUS == 4
                ? "Shipper tạo đơn"
                : value.ORDER_MOVE_STATUS == 5
                ? "Shipper nhận đơn"
                : value.ORDER_MOVE_STATUS == 6
                ? `Đã nhập ${value.STORE_NAME}`
                : value.ORDER_MOVE_STATUS == 7
                ? "Đã gộp kiện"
                : value.ORDER_MOVE_STATUS == 8
                ? "Đã đóng gói"
                : value.ORDER_MOVE_STATUS == 9
                ? `Đang ở ${value.STORE_NAME}`
                : value.ORDER_MOVE_STATUS == 10
                ? `Đã xuất ở ${value.STORE_NAME}`
                : value.ORDER_MOVE_STATUS == 11
                ? `Đã nhận ở ${value.STORE_NAME}`
                : value.ORDER_MOVE_STATUS == 12
                ? "Đã xuất cho shipper"
                : value.ORDER_MOVE_STATUS == 13
                ? "Hoàn thành"
                : value.ORDER_MOVE_STATUS == 14
                ? "Tạm hoãn"
                : value.ORDER_MOVE_STATUS == 15
                ? "Từ chối"
                : ""}
            </td>
            {/* <td>{value.UPDATER || "--"}</td> */}
            <td>
              {`${new Date(value.UPDATE_TIME).toLocaleTimeString(
                "en-US"
              )} ${"-"} ${toDateString(value.UPDATE_TIME)}` || "--"}
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
  render() {
    const { isLoading, error } = this.state;
    return (
      <>
        <Header />
        {isLoading && <LoadingAction />}
        <Error isOpen={error} />
        {this.renderBody()}
      </>
    );
  }
}
