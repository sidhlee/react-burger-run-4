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
  render() {
    return (
      <StyledCheckout>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </StyledCheckout>
    );
  }
}

export default Checkout;
