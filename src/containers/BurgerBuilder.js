import React, { Component } from "react";
import styled from "styled-components";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls";
import * as mock from "../mock";

import Modal from "../components/UI/Modal";
import OrderSummary from "../components/Burger/OrderSummary";

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
    ordering: false
  };

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
    alert("You continued!");
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
    return (
      <Wrapper>
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
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          totalPrice={this.state.totalPrice}
          purchasable={this.updatePurchasable()}
          beginOrder={this.beginOrder}
        />
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
