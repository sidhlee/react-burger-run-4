import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../common/axios-orders";
import withErrorHandler from "../../common/hoc/withErrorHandler";
import Spinner from "../../common/UI/Spinner/Spinner";
import Order from "./Order";

const StyledOrders = styled.div`
  margin-top: var(--margin-top);
`;

const Orders = ({ idToken, localId, fetchOrders, ...props }) => {
  const [fetchingOrders, setFetchingOrders] = useState(true);
  useEffect(() => {
    fetchOrders(idToken, localId).then(() => {
      setFetchingOrders(false);
    });
  }, [idToken, localId, fetchOrders]);

  const orders = fetchingOrders
    ? null
    : props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          totalPrice={order.totalPrice}
        />
      ));
  return (
    <>
      {fetchingOrders && <Spinner show={fetchingOrders} />}
      <StyledOrders>{orders}</StyledOrders>
    </>
  );
};

export default withErrorHandler(Orders, axios);
