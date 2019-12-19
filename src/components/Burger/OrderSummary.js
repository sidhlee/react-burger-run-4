import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const ListGroup = styled.ul`
  display: table;
  margin: 0 auto;
  text-align: left;
  transform: translateX(-1em);
`;

const Wrapper = styled.div`
  padding-bottom: 1em;
`;

const OrderSummary = props => {
  const ingredientSummary = Object.entries(props.ingredients).map(
    ([ing, qty]) => (
      <li key={ing}>
        <span style={{ textTransform: "capitalize" }}>{ing}</span>:{" "}
        {qty}
      </li>
    )
  );
  return (
    <Wrapper>
      <h3>Your Order</h3>
      <p>A tasty burger with the following ingredients!</p>
      <ListGroup>{ingredientSummary}</ListGroup>
      <p>
        <strong>Total Price: ${props.totalPrice.toFixed(2)}</strong>{" "}
      </p>
      <Button btnType="Danger" clicked={props.cancelOrder}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.continueOrder}>
        Continue
      </Button>
    </Wrapper>
  );
};

export default OrderSummary;
