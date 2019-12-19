import React from "react";
import styled from "styled-components";

const getColorOnTypes = props => {
  switch (props.btnType) {
    case "Success":
      return "var(--success)";
    case "Danger":
      return "var(--danger)";
    default:
      return "black";
  }
};

const StyledButton = styled.button`
  display: ${props => (props.block ? "block" : "inline-block")};
  padding: 10px;
  margin: ${props => (props.center ? "10px auto" : "10px")};
  background-color: transparent;
  border: none;
  color: ${getColorOnTypes};
  outline: none;
  cursor: pointer;
  font: inherit bold;
  &:disabled {
    filter: ;
  }
`;

const Button = props => (
  <StyledButton {...props} onClick={props.clicked}>
    {props.children}
  </StyledButton>
);

export default Button;
