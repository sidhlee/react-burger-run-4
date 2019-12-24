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
  ${props =>
    !props.valid && props.touched ? `border: 1px solid red;` : null}
  /* remove chrome's default styling on select element */
  appearance: none;
`;

const Input = props => {
  let input;
  switch (props.inputType) {
    case "input":
      input = (
        <StyledInput
          onChange={props.handleChange}
          as="input"
          {...props.config}
          value={props.value}
          touched={props.touched}
          valid={props.valid}
        />
      );
      break;
    case "textarea":
      input = (
        <StyledInput
          onChange={props.handleChange}
          as="textarea"
          {...props.config}
          value={props.value}
          touched={props.touched}
          valid={props.valid}
        />
      );
      break;
    case "select":
      input = (
        <StyledInput
          as="select"
          defaultValue=""
          onChange={props.handleChange}
          touched={props.touched}
          valid={props.valid}
        >
          {props.config.options.map(option =>
            option.value ? (
              <option key={option.displayValue} value={option.value}>
                {option.displayValue}
              </option>
            ) : (
              <option key={option.displayValue} value="" disabled>
                {option.displayValue}
              </option>
            )
          )}
        </StyledInput>
      );
      break;
    default:
      input = (
        <StyledInput
          onChange={props.handleChange}
          as="input"
          {...props.config}
          value={props.value}
          touched={props.touched}
          valid={props.valid}
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
