import React from "react";
import styled from "styled-components";
import CheckoutSummary from "./CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactDataContainer from "./contactData/ContactDataContainer";
import axios from "../../common/axios-orders";
import withErrorHandler from "../../common/hoc/withErrorHandler";

const StyledCheckout = styled.div``;

const Checkout = props => {
  const cancelCheckout = () => {
    props.history.goBack();
  };
  const continueCheckout = () => {
    props.history.replace("/checkout/contact-data");
  };

  const summary = props.ingredients ? (
    <CheckoutSummary
      ingredients={props.ingredients}
      cancelCheckout={cancelCheckout}
      continueCheckout={continueCheckout}
    />
  ) : (
    <Redirect to="/" />
  );
  return (
    <StyledCheckout>
      {summary}
      <Route
        path={props.match.path + "/contact-data"}
        component={ContactDataContainer}
      />
    </StyledCheckout>
  );
};

export default withErrorHandler(Checkout, axios);
