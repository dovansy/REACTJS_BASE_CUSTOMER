import React, { Component } from "react";
import Header from "@components/Header";

export default class PriceTableScreen extends Component {
  renderStatusShipTableData() {
    return (
      <tbody>
        <tr>
          <td>1</td>
          <td>Nội tỉnh</td>
          <td>20.000(VNĐ)</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Liên tỉnh</td>
          <td>50.000(VNĐ)</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Thường</td>
          <td>20.000(VNĐ)</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Thần tốc</td>
          <td>50.000(VNĐ)</td>
        </tr>
      </tbody>
    );
  }
  render() {
    return (
      <>
        <Header />
        <div
          className="container text-align-center"
          style={{ textAlign: "center", color: "#33a6b9" }}
        >
          <div className="my-5">
            <h1 className="mb-5">Bảng giá vận chuyển</h1>
            <table id="example2" className="table table-bordered table-striped">
              <thead className="text-center bg-thead">
                <tr>
                  <th>STT</th>
                  <th>Loại vận chuyển</th>
                  <th>Giá vận chuyển</th>
                </tr>
              </thead>
              {this.renderStatusShipTableData()}
            </table>
          </div>
        </div>
      </>
    );
  }
}
