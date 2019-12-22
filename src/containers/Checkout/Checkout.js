import React, { Component } from "react";
import styled from "styled-components";
import CheckoutSummary from "../../components/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData";

const StyledCheckout = styled.div``;

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      beef: 1
    }
  };
  componentDidMount() {
    const ingredients = this.parseIngredient();
    this.setState({ ingredients });
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
          component={ContactData}
        />
      </StyledCheckout>
    );
  }
}

export default Checkout;
