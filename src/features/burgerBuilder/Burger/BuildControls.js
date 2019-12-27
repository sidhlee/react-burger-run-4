import React from "react";
import styled from "styled-components";
import BuildControl from "./BuildControl";
import OrderButton from "./OrderButton";

const Wrapper = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

const BuildControls = props => {
  const controlItems = ["salad", "bacon", "cheese", "beef"];
  const controls = controlItems.map(item => (
    <BuildControl
      key={item}
      label={item}
      addIngredient={() => props.addIngredient(item)}
      removeIngredient={() => props.removeIngredient(item)}
      disabled={props.ingredients[item] <= 0}
    />
  ));

  return (
    <Wrapper>
      <p>
        <strong>Total Price: ${props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls}
      <OrderButton
        disabled={!props.purchasable}
        clicked={props.startOrder}
      >
        {props.isAuthenticated ? "Order Now" : "Sign In to Order"}
      </OrderButton>
    </Wrapper>
  );
};

export default BuildControls;
