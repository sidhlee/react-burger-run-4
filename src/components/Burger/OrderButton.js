import React from "react";
import styled, { keyframes } from "styled-components";
import { disabled } from "../../utils";

const enable = keyframes`
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledOrderButton = styled.button`
  background-color: var(--yellow);
  outline: none;
  cursor: pointer;
  border: 1px solid var(--dark);
  color: var(--dark);
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px var(--dark);
  &:hover,
  &:active {
    background-color: #a0db41;
    border: 1px solid var(--dark);
  }
  ${disabled}

  &:not(:disabled) {
    animation: ${enable} 0.3s linear;
  }
`;

const OrderButton = props => (
  <StyledOrderButton onClick={props.clicked} {...props}>
    {props.children}
  </StyledOrderButton>
);

export default OrderButton;
