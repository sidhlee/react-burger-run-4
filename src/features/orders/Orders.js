import React, { Component } from "react";
import styled from "styled-components";
import axios from "../../common/axios-orders";
import withErrorHandler from "../../common/hoc/withErrorHandler";
import Spinner from "../../common/UI/Spinner/Spinner";

import Order from "./Order";

const StyledOrders = styled.div`
  margin-top: var(--margin-top);
`;

class Orders extends Component {
  state = {
    fetchingOrders: true
  };

  componentDidMount() {
    this.props.fetchOrders(this.props.idToken).then(() => {
      this.setState({ fetchingOrders: false });
    });
  }

  render() {
    const orders = this.state.fetchingOrders
      ? null
      : this.props.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            totalPrice={order.totalPrice}
          />
        ));
    return (
      <>
        {this.state.fetchingOrders && (
          <Spinner show={this.fetchingOrders} />
        )}
        <StyledOrders>{orders}</StyledOrders>
      </>
    );
  }
}

export default withErrorHandler(Orders, axios);
