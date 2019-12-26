import React from "react";
import styled from "styled-components";

const StyledOrder = styled.div`
  width: 80%;
  max-width: 400px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 3px var(--gray);
  padding: 10px;
  margin: 20px auto;
  box-sizing: border-box;
`;
const StyledIngredientSpan = styled.span`
  text-transform: capitalize;
  border: 1px solid var(--light-gray);
  border-radius: 8px;
  font-size: 0.75em;
  margin: 0 3px 3px 0;
  padding: 0px 5px;
  display: inline-block;
`;
const Order = props => {
  const ingredientsSpans = props.ingredients
    ? Object.entries(props.ingredients).map(([ing, qty]) => (
        <StyledIngredientSpan key={ing}>
          {ing}({qty})
        </StyledIngredientSpan>
      ))
    : null;

  return (
    <StyledOrder>
      <p style={{ lineHeight: "1.5em" }}>
        Ingredients: {ingredientsSpans}
      </p>
      <p>
        Price:{" "}
        <strong>
          ${props.totalPrice && props.totalPrice.toFixed(2)}
        </strong>
      </p>
    </StyledOrder>
  );
};

export default Order;
