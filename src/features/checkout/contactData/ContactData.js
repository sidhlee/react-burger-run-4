import React, { Component } from "react";
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

class ContactData extends Component {
  state = {
    orderForm: {
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
    },
    ordering: false,
    isFormValid: false
  };

  orderBurger = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = Object.keys(this.state.orderForm).reduce(
      (formData, input) => {
        formData[input] = this.state.orderForm[input].value;
        return formData;
      },
      {}
    );

    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      orderData: formData
    };

    this.props.orderBurger(order).then(() => {
      this.setState({ loading: false });
      this.props.history.push("/");
    });
  };

  // TODO: fix select element behavior
  // where isFormValid doesn't get updated when selecting
  // any option the first time.
  handleChange = (e, id) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
      [id]: {
        ...this.state.orderForm[id],
        value: e.target.value,
        touched: true
      }
    };
    const input = updatedOrderForm[id];
    input.valid = checkValidity(input.value, input.validation);
    const isFormValid = Object.keys(updatedOrderForm).reduce(
      (bool, id) => {
        bool = this.state.orderForm[id].valid && bool;
        return bool;
      },
      true
    );

    this.setState({
      ...this.state,
      orderForm: updatedOrderForm,
      isFormValid: isFormValid
    });
  };
  render() {
    const inputObjects = Object.keys(this.state.orderForm).map(
      input => ({
        id: input,
        ...this.state.orderForm[input]
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
      <>
        {this.state.ordering && (
          <Spinner show={this.state.ordering} />
        )}
        <StyledContactData>
          <h4>Enter your contact info</h4>
          <StyledForm onSubmit={this.orderBurger}>
            {inputs}
            <Button
              btnType="Success"
              disabled={!this.state.isFormValid}
            >
              Order
            </Button>
          </StyledForm>
        </StyledContactData>
      </>
    );
  }
}

export default withErrorHandler(ContactData, axios);
