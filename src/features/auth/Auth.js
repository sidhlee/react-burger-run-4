import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { checkValidity } from "../../common/validation/";
import Input from "../../common/UI/Input";
import Button from "../../common/UI/Button";
import Spinner from "../../common/UI/Spinner/Spinner";
import { Redirect } from "react-router-dom";

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

const Auth = props => {
  // TODO: Add autoFocus to first input control
  const [controls, setControls] = useState({
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
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const {
    building,
    authRedirectPath,
    setAuthRedirectPath,
    resetBuilding
  } = props;
  useEffect(() => {
    // reset redirect path if user is not building OR it's already "/"
    // We're always redirected to the root unless building.
    if (!building && authRedirectPath !== "/") {
      setAuthRedirectPath("/");
    } else {
      // will reset building status to false every time auth page is visited
      // But the redirect path set previously will not change
      // (e.g. It is set to "/checkout" when user clicks order button on root page.
      //  But if the user clicks on the link to come to auth page, they'll be redirected to "/" )
      resetBuilding();
    }
  }, [
    building,
    authRedirectPath,
    setAuthRedirectPath,
    resetBuilding
  ]);

  useEffect(() => {
    // return false if ANY of the input is invalid
    const isFormValid = Object.keys(controls).reduce((bool, id) => {
      bool = controls[id].valid && bool;
      return bool;
    }, true);
    setIsFormValid(isFormValid);
  }, [controls]);

  const handleChange = (e, id) => {
    const updatedControls = {
      ...controls,
      [id]: {
        ...controls[id],
        value: e.target.value,
        touched: true
      }
    };
    const input = updatedControls[id];
    input.valid = checkValidity(input.value, input.validation);
    setControls(updatedControls);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.auth(
      controls.email.value,
      controls.password.value,
      isSignIn
    );
    setControls(prevControls => ({
      ...prevControls,
      email: {
        ...prevControls.email,
        value: ""
      },
      password: {
        ...prevControls.password,
        value: ""
      }
    }));
  };

  const switchAuthMode = () => {
    setControls(prevControls => ({
      ...prevControls,
      email: {
        ...prevControls.email,
        value: ""
      },
      password: {
        ...prevControls.password,
        value: ""
      }
    }));
    setIsSignIn(prevIsSignIn => !prevIsSignIn);
  };

  const inputObjects = Object.keys(controls).map(input => ({
    id: input,
    ...controls[input]
  }));

  const inputs = inputObjects.map(inputObject => (
    <Input
      key={inputObject.id}
      inputType={inputObject.inputType}
      config={inputObject.config}
      value={inputObject.value}
      valid={inputObject.valid}
      touched={inputObject.touched}
      handleChange={e => handleChange(e, inputObject.id)}
    />
  ));

  const errorMessage = props.error ? (
    <StyledErrorMessage>{props.error}</StyledErrorMessage>
  ) : null;
  return (
    <>
      {props.loading && <Spinner show={props.loading} />}
      {props.isAuthenticated ? (
        <Redirect to={props.authRedirectPath} />
      ) : null}
      <StyledAuth>
        <StyledForm onSubmit={handleSubmit}>
          {inputs}
          <Button btnType="Success" disabled={!isFormValid}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
          <Button
            btnType="Danger"
            type="button"
            clicked={switchAuthMode}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </Button>
        </StyledForm>
        {errorMessage}
      </StyledAuth>
    </>
  );
};

export default Auth;
