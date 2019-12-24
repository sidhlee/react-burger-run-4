import React, { Component } from "react";
import styled from "styled-components";
import Burger from "./Burger/Burger";
import BuildControls from "./Burger/BuildControls";
import * as mock from "../../common/mock";

import Modal from "../../common/UI/Modal";
import OrderSummary from "./Burger/OrderSummary";

import axios from "../../common/axios-orders";
import Spinner from "../../common/UI/Spinner/Spinner";

import withErrorHandler from "../../common/hoc/withErrorHandler";

const Wrapper = styled.div``;
const BASE_PRICE = 4.99;
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  beef: 1.3
};

export class BurgerBuilder extends Component {
  state = {
    ingredients: { ...mock.ingredients },
    totalPrice: BASE_PRICE,
    ordering: false,
    loading: false,
    fetchError: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("/ingredients.json")
      .then(res => {
        this.setState({ ingredients: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ loading: false, fetchError: true });
      });
  }

  updatePurchasable = () => {
    const totalQty = Object.values(this.state.ingredients).reduce(
      (a, b) => a + b
    );
    return totalQty > 0;
  };

  beginOrder = () => {
    this.setState({ ordering: true });
  };

  cancelOrder = () => {
    this.setState({ ordering: false });
  };

  continueOrder = () => {
    const searchParam = Object.entries(this.state.ingredients)
      .map(([ing, qty]) => `${ing}=${qty}`)
      .join("&");
    this.props.history.push({
      pathname: "/checkout",
      search:
        "?" + searchParam + `&totalPrice=${this.state.totalPrice}`
    });
  };

  addIngredient = ing => {
    const qty = this.state.ingredients[ing];
    const updatedIngredients = {
      ...this.state.ingredients,
      [ing]: qty + 1
    };
    const updatedTotalPrice =
      this.state.totalPrice + INGREDIENT_PRICES[ing];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice
    });
  };

  removeIngredient = ing => {
    const qty = this.state.ingredients[ing];
    // can't remove when qty <= 0
    if (qty <= 0) return;
    const updatedIngredients = {
      ...this.state.ingredients,
      [ing]: qty - 1
    };
    const updatedTotalPrice =
      this.state.totalPrice - INGREDIENT_PRICES[ing];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice
    });
  };

  render() {
    const burgerAndControls = this.state.fetchError ? (
      // TODO: why <p> doens't work with marginTop style here? other styles like color work though.
      <div style={{ marginTop: "10em" }}>
        Ingredients cannot be loaded from the server.
      </div>
    ) : (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          totalPrice={this.state.totalPrice}
          purchasable={this.updatePurchasable()}
          beginOrder={this.beginOrder}
        />
      </>
    );
    return (
      <Wrapper>
        {this.state.loading && <Spinner />}
        <Modal
          show={this.state.ordering}
          closeModal={this.cancelOrder}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            continueOrder={this.continueOrder}
            cancelOrder={this.cancelOrder}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        {burgerAndControls}
      </Wrapper>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
