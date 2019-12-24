import React, { Component } from "react";
import styled from "styled-components";
import Burger from "./Burger/Burger";
import BuildControls from "./Burger/BuildControls";

import Modal from "../../common/UI/Modal";
import OrderSummary from "./Burger/OrderSummary";

import axios from "../../common/axios-orders";
import Spinner from "../../common/UI/Spinner/Spinner";

import withErrorHandler from "../../common/hoc/withErrorHandler";

const Wrapper = styled.div``;

export class BurgerBuilder extends Component {
  // local UI states only
  state = {
    ordering: false,
    loading: false,
    fetchError: false
  };

  componentDidMount() {
    // this.setState({ loading: true });
    // axios
    //   .get("/ingredients.json")
    //   .then(res => {
    //     this.setState({ ingredients: res.data, loading: false });
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false, fetchError: true });
    //   });
  }

  updatePurchasable = () => {
    const totalQty = Object.values(this.props.ingredients).reduce(
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
    this.props.history.push("/checkout");
  };

  render() {
    const burgerAndControls = this.state.fetchError ? (
      // TODO: why <p> doens't work with marginTop style here? other styles like color work though.
      <div style={{ marginTop: "10em" }}>
        Ingredients cannot be loaded from the server.
      </div>
    ) : (
      <>
        <Burger ingredients={this.props.ingredients} />
        <BuildControls
          ingredients={this.props.ingredients}
          addIngredient={this.props.addIngredient}
          removeIngredient={this.props.removeIngredient}
          totalPrice={this.props.totalPrice}
          // updatePurchasable gets called every time this is re-rendered
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
            ingredients={this.props.ingredients}
            continueOrder={this.continueOrder}
            cancelOrder={this.cancelOrder}
            totalPrice={this.props.totalPrice}
          />
        </Modal>
        {burgerAndControls}
      </Wrapper>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
