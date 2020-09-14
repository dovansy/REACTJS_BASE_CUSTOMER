import React, { Component } from "react";
import SearchOrder from "../components/SearchOrder";
import Header from "@components/Header";
class SearchOrderScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchOrder />
      </>
    );
  }
}
export default SearchOrderScreen;
