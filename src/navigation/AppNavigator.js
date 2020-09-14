import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import UserScreen from "@screens/UserScreen";

import NotFoundPage from "@screens/NotFoundPage";
import HomeScreen from "@screens/HomeScreen";
import ContactScreen from "@screens/ContactScreen";
import PriceTableScreen from "@screens/PriceTableScreen";
import SearchScreen from "@screens/SearchScreen";
import OrderScreen from "@screens/OrderScreen";
import IntroduceScreen from "@screens/IntroduceScreen";
import OrderDetailScreen from "@screens/OrderDetailScreen";
import SearchOrderScreen from "@screens/SearchOrderScreen";
import OperationRegulation from "@screens/OperationRegulation";
import WarrantyPersonal from "@screens/WarrantyPersonal";
import PrivacyPolicy from "@screens/PrivacyPolicy";
import PaymentGuide from "@screens/PaymentGuide";
import OrderingGuide from "@screens/OrderingGuide";
import QAndA from "@screens/QAndA";
import Header from "@components/Header";
import Footer from "@components/Footer";

import { ROUTER } from "@constants/Constant";

export class AppNavigator extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={ROUTER.HOME} exact component={HomeScreen} />
          <Route path={ROUTER.CONTACT} exact component={ContactScreen} />
          <Route path={ROUTER.PRICE_TABLE} exact component={PriceTableScreen} />
          <Route path={ROUTER.SEARCHORDER} exact component={SearchScreen} />
          <Route
            path={ROUTER.OPERATION_REGULATION}
            exact
            component={OperationRegulation}
          />
          <Route
            path={ROUTER.WARRANTY_PERSONAL}
            exact
            component={WarrantyPersonal}
          />
          <Route path={ROUTER.PRIVACY_POLICY} exact component={PrivacyPolicy} />
          <Route path={ROUTER.PAYMENT_GUIDE} exact component={PaymentGuide} />
          <Route path={ROUTER.ORDER_GUIDE} exact component={OrderingGuide} />
          <Route path={ROUTER.Q_AND_A} exact component={QAndA} />
          <Route
            path={ROUTER.ORDER_DETAIL + "/:id"}
            exact
            component={OrderDetailScreen}
          />
          <Route
            path={ROUTER.SEARCHORDER + "/:value"}
            exact
            component={SearchScreen}
          />
          <Route path={ROUTER.INTRODUCE} exact component={IntroduceScreen} />
          <Route render={() => <Redirect to={ROUTER.HOME} />} />
          <Route path={ROUTER.NOT_FOUND} component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
