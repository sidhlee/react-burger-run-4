import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";

const StyledContactData = styled.div``;
const StyledForm = styled.form``;

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };
  render() {
    return (
      <StyledContactData>
        <h4>Enter your contact info</h4>
        <StyledForm>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Street" />
          <input type="text" placeholder="Zip Code" />
          <Button btnType="Success">Order</Button>
        </StyledForm>
      </StyledContactData>
    );
  }
}

export default ContactData;
