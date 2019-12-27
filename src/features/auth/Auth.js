import React, { Component } from "react";
import styled from "styled-components";
import { checkValidity } from "../../common/validation/";
import Input from "../../common/UI/Input";
import Button from "../../common/UI/Button";

const StyledAuth = styled.div``;
const StyledForm = styled.form`
  width: 90%;
  max-width: 500px;
  margin: 6em auto;
`;

class Auth extends Component {
  state = {
    controls: {
      email: {
        inputType: "input",
        config: {
          type: "email",
          label: "Email",
          placeholder: "Your email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        touched: false,
        valid: false
      },
      password: {
        inputType: "input",
        config: {
          type: "password",
          label: "Password",
          placeholder: "Your Burger Builder password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        touched: false,
        valid: false
      }
    },
    isFormValid: false
  };

  handleChange = (e, id) => {
    const updatedControls = {
      ...this.state.controls,
      [id]: {
        ...this.state.controls[id],
        value: e.target.value,
        touched: true
      }
    };
    const input = updatedControls[id];
    input.valid = checkValidity(input.value, input.validation);
    // return false if ANY of the input is invalid
    const isFormValid = Object.keys(updatedControls).reduce(
      (bool, id) => {
        bool = this.state.controls[id].valid && bool;
        return bool;
      },
      true
    );

    this.setState({
      ...this.state,
      controls: updatedControls,
      isFormValid: isFormValid
    });
  };

  render() {
    const inputObjects = Object.keys(this.state.controls).map(
      input => ({
        id: input,
        ...this.state.controls[input]
      })
    );

    const inputs = inputObjects.map(inputObject => (
      <Input
        key={inputObject.id}
        inputType={inputObject.inputType}
        config={inputObject.config}
        value={inputObject.value}
        valid={inputObject.valid}
        touched={inputObject.touched}
        handleChange={e => this.handleChange(e, inputObject.id)}
      />
    ));
    return (
      <StyledAuth>
        <StyledForm>
          {inputs}
          <Button btnType="Success">Signup</Button>
        </StyledForm>
      </StyledAuth>
    );
  }
}

export default Auth;
