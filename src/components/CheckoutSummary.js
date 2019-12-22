import React from "react";
import styled from "styled-components";
import Burger from "../components/Burger/Burger";
import Button from "../components/UI/Button";

const StyledCheckoutSummary = styled.div`
  text-align: center;
  width: 80%;
  @media (min-width: 576px) {
    width: 500px;
  }
  margin: 5em auto 0 auto;
`;
const BurgerWrapper = styled.div`
  width: 100%;
  margin: -30px auto 0 auto;
`;

const CheckoutSummary = props => (
  <StyledCheckoutSummary>
    <h1>Here's your tasty burger!</h1>
    <BurgerWrapper>
      <Burger ingredients={props.ingredients} />
    </BurgerWrapper>
    <Button btnType="Danger" clicked>
      Cancel
    </Button>
    <Button btnType="Success" clicked>
      Continue
    </Button>
  </StyledCheckoutSummary>
);

export default CheckoutSummary;
