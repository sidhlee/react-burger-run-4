import React, { Component } from "react";
import styled from "styled-components";
import CheckoutSummary from "../components/CheckoutSummary";

const StyledCheckout = styled.div``;

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      beef: 1
    }
  };

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
          ingredients={this.state.ingredients}
          cancelCheckout={this.cancelCheckout}
          continueCheckout={this.continueCheckout}
        />
      </StyledCheckout>
    );
  }
}

export default Checkout;
