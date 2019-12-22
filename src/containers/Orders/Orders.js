import React, { Component } from "react";
import styled from "styled-components";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler";

const StyledOrders = styled.div``;

class Orders extends Component {
  render() {
    return <StyledOrders></StyledOrders>;
  }
}

export default withErrorHandler(Orders, axios);
