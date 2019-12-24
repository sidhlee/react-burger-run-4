import React, { Component } from "react";
import styled from "styled-components";
import CheckoutSummary from "./CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData";
import axios from "../../common/axios-orders";
import withErrorHandler from "../../common/hoc/withErrorHandler";

const StyledCheckout = styled.div``;

class Checkout extends Component {
  cancelCheckout = () => {
    this.props.history.goBack();
  };
  continueCheckout = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <StyledCheckout>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          cancelCheckout={this.cancelCheckout}
          continueCheckout={this.continueCheckout}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={props => (
            <ContactData
              {...props}
              ingredients={this.props.ingredients}
              totalPrice={this.props.totalPrice}
            />
          )}
        />
      </StyledCheckout>
    );
  }
}

export default withErrorHandler(Checkout, axios);
