import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import Input from "../../components/UI/Input";

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
        value: ""
      },
      street: {
        inputType: "input",
        config: {
          type: "text",
          label: "Street",
          placeholder: "Street address"
        },
        value: ""
      },
      zipCode: {
        inputType: "input",
        config: {
          type: "text",
          label: "Zip Code",
          placeholder: "5 digit zip-code"
        },
        value: ""
      },
      country: {
        inputType: "input",
        config: {
          type: "text",
          label: "Country",
          placeholder: "Country"
        },
        value: ""
      },
      email: {
        inputType: "input",
        config: {
          type: "email",
          label: "Email",
          placeholder: "Your email"
        },
        value: ""
      },
      deliveryMethod: {
        inputType: "select",
        config: {
          label: "Delivery Method",
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: ""
      }
    },
    loading: false
  };

  startOrder = e => {
    console.log("startOrder");
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice
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
  render() {
    return (
      <>
        {this.state.loading && <Spinner show={this.state.loading} />}
        <StyledContactData>
          <h4>Enter your contact info</h4>
          <StyledForm onSubmit={this.startOrder}>
            <Input
              inputType="input"
              type="text"
              placeholder="Your name"
              label="Name"
            />
            <Input
              inputType="input"
              type="text"
              placeholder="Your email"
              label="Email"
            />
            <Input
              inputType="input"
              type="text"
              placeholder="Street address"
              label="Street"
            />
            <Input
              inputType="input"
              type="text"
              placeholder="5 digit zipcode"
              label="Zip Code"
            />
            <Button btnType="Success">Order</Button>
          </StyledForm>
        </StyledContactData>
      </>
    );
  }
}

export default ContactData;
