import React from "react";
import styled from "styled-components";

const StyledInputGroup = styled.div`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  box-sizing: border-box;
`;
const StyledLabel = styled.label`
  display: block;
  text-align: left;
  margin: 0 0 2px 10px;
  font-size: 0.8em;
`;
const StyledInput = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  outline: none;
  border: 1px solid var(--gray);
  border-radius: 5px;
  font: inherit;
  font-size: 1em;
  padding: 8px 10px;
`;

const Input = props => {
  let input;
  switch (props.inputType) {
    case "input":
      input = (
        <StyledInput
          as="input"
          {...props.config}
          value={props.value}
        />
      );
      break;
    case "textarea":
      input = (
        <StyledInput
          as="textarea"
          {...props.config}
          value={props.value}
        />
      );
      break;
    default:
      input = (
        <StyledInput
          as="input"
          {...props.config}
          value={props.value}
        />
      );
  }

  return (
    <StyledInputGroup>
      <StyledLabel>{props.config.label}</StyledLabel>
      {input}
    </StyledInputGroup>
  );
};

export default Input;
