import React, { Component } from "react";
import styled from "styled-components";
import { checkValidity } from "../../common/validation/";
import Input from "../../common/UI/Input";
import Button from "../../common/UI/Button";
import Spinner from "../../common/UI/Spinner/Spinner";

const StyledAuth = styled.div``;
const StyledForm = styled.form`
  width: 90%;
  max-width: 500px;
  margin: 6em auto 1em auto;
`;
const StyledErrorMessage = styled.p`
  border: solid 1px red;
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
  margin: auto;
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
    isFormValid: false,
    isSignIn: true
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

    this.setState(
      {
        controls: updatedControls
      },
      () => {
        // return false if ANY of the input is invalid
        const isFormValid = Object.keys(updatedControls).reduce(
          (bool, id) => {
            bool = this.state.controls[id].valid && bool;
            return bool;
          },
          true
        );
        this.setState({
          isFormValid
        });
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.auth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignIn
    );
    this.setState(prevState => ({
      controls: {
        email: {
          ...this.state.controls.email,
          value: ""
        },
        password: {
          ...this.state.controls.password,
          value: ""
        }
      }
    }));
  };

  switchAuthMode = () => {
    this.setState(prevState => ({
      controls: {
        email: {
          ...this.state.controls.email,
          value: ""
        },
        password: {
          ...this.state.controls.password,
          value: ""
        }
      },
      isSignIn: !prevState.isSignIn
    }));
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

    const errorMessage = this.props.error ? (
      <StyledErrorMessage>{this.props.error}</StyledErrorMessage>
    ) : null;
    return (
      <>
        {this.props.loading && <Spinner show={this.props.loading} />}
        <StyledAuth>
          <StyledForm onSubmit={this.handleSubmit}>
            {inputs}
            <Button
              btnType="Success"
              disabled={!this.state.isFormValid}
            >
              {this.state.isSignIn ? "Sign In" : "Sign Up"}
            </Button>
            <Button
              btnType="Danger"
              type="button"
              clicked={this.switchAuthMode}
            >
              {this.state.isSignIn ? "Sign Up" : "Sign In"}
            </Button>
          </StyledForm>
          {errorMessage}
        </StyledAuth>
      </>
    );
  }
}

export default Auth;
