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
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const orders = Object.entries(res.data).map(
          ([id, order]) => ({
            id,
            ...order
          })
        );
        this.setState({ orders, loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    const orders = this.state.loading
      ? null
      : this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            totalPrice={order.totalPrice}
          />
        ));
    return (
      <>
        {this.loading && <Spinner show={this.loading} />}
        <StyledOrders>{orders}</StyledOrders>
      </>
    );
  }
}

export default withErrorHandler(Orders, axios);
