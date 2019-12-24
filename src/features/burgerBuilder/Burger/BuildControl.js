import React from "react";
import styled from "styled-components";
import { disabled } from "../../../common/utils/";

const StyledBuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;
const StyledLabel = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
  text-transform: capitalize;
`;
const StyledButton = styled.button`
  font: inherit;
  width: 80px;
  margin: 0 5px;
  padding: 5px;
  border: 1px solid #aa6817;
  outline: none;
  cursor: pointer;
  color: white;
  background-color: ${props => {
    switch (props.type) {
      case "more":
        return "var(--dark)";
      case "less":
        return "var(--light)";
      default:
        return null;
    }
  }};
  &:hover,
  &:active {
    filter: brightness(0.9);
  }
  ${disabled}
`;

const BuildControl = props => (
  <StyledBuildControl>
    <StyledLabel>{props.label}</StyledLabel>
    <StyledButton
      type="less"
      onClick={props.removeIngredient}
      disabled={props.disabled}
    >
      Less
    </StyledButton>
    <StyledButton type="more" onClick={props.addIngredient}>
      More
    </StyledButton>
  </StyledBuildControl>
);

export default BuildControl;
