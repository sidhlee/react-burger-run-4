import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import Input from "../../components/UI/Input";
import { checkValidity } from "../../validation";

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
          required: true
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
          required: true
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
    loading: false
  };

  startOrder = e => {
    console.log("startOrder");
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
    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false });
        console.log(res);
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          loading: false
        });
        console.log(err);
      });
  };

  inputChangedHandler = (e, id) => {
    this.setState({
      ...this.state,
      orderForm: {
        ...this.state.orderForm,
        [id]: {
          ...this.state.orderForm[id],
          value: e.target.value
        }
      }
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
        changed={e => this.inputChangedHandler(e, inputObject.id)}
      />
    ));

    return (
      <>
        {this.state.loading && <Spinner show={this.state.loading} />}
        <StyledContactData>
          <h4>Enter your contact info</h4>
          <StyledForm onSubmit={this.startOrder}>
            {inputs}
            <Button btnType="Success">Order</Button>
          </StyledForm>
        </StyledContactData>
      </>
    );
  }
}

export default ContactData;
