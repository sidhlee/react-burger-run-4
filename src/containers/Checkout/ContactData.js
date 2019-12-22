import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

const StyledContactData = styled.div``;
const StyledForm = styled.form``;

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  startOrder = e => {
    console.log("startOrder");
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      customer: {
        name: "John",
        address: {
          street: "test st. 1",
          zipCode: "12345",
          country: "Japan"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false });
        console.log(res);
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
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Street" />
            <input type="text" placeholder="Zip Code" />
            <Button btnType="Success">Order</Button>
          </StyledForm>
        </StyledContactData>
      </>
    );
  }
}

export default ContactData;
