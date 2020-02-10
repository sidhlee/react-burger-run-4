import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../common/UI/Button";
import axios from "../../../common/axios-orders";
import Spinner from "../../../common/UI/Spinner/Spinner";
import Input from "../../../common/UI/Input";
import { checkValidity } from "../../../common/validation";
import withErrorHandler from "../../../common/hoc/withErrorHandler";

const StyledContactData = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
  @media (min-width: 576px) {
    width: calc(576px * 0.9);
  }
`;
const StyledForm = styled.form``;

const ContactData = props => {
  const [orderForm, setOrderForm] = useState({
    // TODO: Add autoFocus to name input
    name: {
      inputType: "input",
      config: {
        type: "text",
        label: "Name",
        placeholder: "Your name"
      },
      value: "",
      validation: {
        required: true
      },
      touched: false,
      valid: false
    },
    street: {
      inputType: "input",
      config: {
        type: "text",
        label: "Street",
        placeholder: "Street address"
      },
      value: "",
      validation: {
        required: true
      },
      touched: false,
      valid: false
    },
    zipCode: {
      inputType: "input",
      config: {
        type: "text",
        label: "Zip Code",
        placeholder: "5 digit zip-code"
      },
      value: "",
      validation: {
        required: true,
        isNumeric: true,
        minLength: 5,
        maxLength: 5
      },
      touched: false,
      valid: false
    },
    country: {
      inputType: "input",
      config: {
        type: "text",
        label: "Country",
        placeholder: "Country"
      },
      value: "",
      validation: {
        required: true
      },
      touched: false,
      valid: false
    },
    // TODO: get email value from auth info
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
    deliveryMethod: {
      inputType: "select",
      config: {
        label: "Delivery Method",
        options: [
          { value: "", displayValue: "Please select one" },
          { value: "fastest", displayValue: "Fastest" },
          { value: "cheapest", displayValue: "Cheapest" }
        ]
      },
      value: "",
      validation: {},
      touched: false,
      valid: false
    }
  });
  const [ordering, setOrdering] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const orderBurger = e => {
    e.preventDefault();
    setOrdering(true);
    const formData = Object.keys(orderForm).reduce(
      (formData, input) => {
        formData[input] = orderForm[input].value;
        return formData;
      },
      {}
    );

    const order = {
      ingredients: props.ingredients,
      totalPrice: props.totalPrice,
      orderData: formData,
      localId: props.localId
    };

    props.orderBurger(order, props.idToken).then(() => {
      setOrdering(false);
      props.history.push("/");
    });
  };

  const handleChange = (e, id) => {
    const updatedOrderForm = {
      ...orderForm,
      [id]: {
        ...orderForm[id],
        value: e.target.value,
        touched: true
      }
    };
    const input = updatedOrderForm[id];
    input.valid = checkValidity(input.value, input.validation);

    setOrderForm(updatedOrderForm);

    // return false if ANY of the input is invalid
    const isValid = Object.keys(updatedOrderForm).reduce(
      (bool, id) => {
        bool = orderForm[id].valid && bool;
        return bool;
      },
      true
    );
    setIsFormValid(isValid);
  };

  const inputObjects = Object.keys(orderForm).map(input => ({
    id: input,
    ...orderForm[input]
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

  return (
    <>
      {ordering && <Spinner show={ordering} />}
      <StyledContactData>
        <h4>Enter your contact info</h4>
        <StyledForm onSubmit={orderBurger}>
          {inputs}
          <Button btnType="Success" disabled={!isFormValid}>
            Order
          </Button>
        </StyledForm>
      </StyledContactData>
    </>
  );
};

export default withErrorHandler(ContactData, axios);
