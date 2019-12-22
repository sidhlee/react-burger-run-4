import React, { Component } from "react";
import styled from "styled-components";
import CheckoutSummary from "../../components/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler";

const StyledCheckout = styled.div``;

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  };
  UNSAFE_componentWillMount() {
    const ingredients = this.parseIngredient();
    const totalPrice = +ingredients.totalPrice;
    delete ingredients.totalPrice;
    this.setState({ ingredients, totalPrice });
  }

  cancelCheckout = () => {
    this.props.history.goBack();
  };
  continueCheckout = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  parseIngredient = () => {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = [...query.entries()].reduce(
      (obj, [ing, qty]) => {
        obj[ing] = +qty; // don't forget to numberfy paramed data!
        return obj;
      },
      {}
    );
    console.log(ingredients);
    return ingredients;
  };
  render() {
    return (
      <StyledCheckout>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancelCheckout={this.cancelCheckout}
          continueCheckout={this.continueCheckout}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={props => (
            <ContactData
              {...props}
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
            />
          )}
        />
      </StyledCheckout>
    );
  }
}

export default withErrorHandler(Checkout, axios);
