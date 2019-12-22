import React, { Component } from "react";
import styled from "styled-components";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler";

import Order from "./Order";

const StyledOrders = styled.div`
  margin-top: var(--margin-top);
`;

class Orders extends Component {
  state = {
    orders: [
      {
        ingredients: {
          salad: 1,
          bacon: 1,
          cheese: 1,
          beef: 1
        },
        totalPrice: 5
      }
    ]
  };

  render() {
    return (
      <StyledOrders>
        <Order
          ingredients={this.state.orders[0].ingredients}
          totalPrice={this.state.orders[0].totalPrice}
        />
        <Order
          ingredients={this.state.orders[0].ingredients}
          totalPrice={this.state.orders[0].totalPrice}
        />
        <Order
          ingredients={this.state.orders[0].ingredients}
          totalPrice={this.state.orders[0].totalPrice}
        />
      </StyledOrders>
    );
  }
}

export default withErrorHandler(Orders, axios);
