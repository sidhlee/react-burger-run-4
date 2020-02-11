import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Burger from "./Burger/Burger";
import BuildControls from "./Burger/BuildControls";

import Modal from "../../common/UI/Modal";
import OrderSummary from "./Burger/OrderSummary";

import axios from "../../common/axios-orders";
import Spinner from "../../common/UI/Spinner/Spinner";

import withErrorHandler from "../../common/hoc/withErrorHandler";

const Wrapper = styled.div``;

export const BurgerBuilder = ({ initIngredients, ...props }) => {
  // local UI states only
  const [ordering, setOrdering] = useState(false);
  const [fetchingIngredients, setFetchingIngredients] = useState(
    false
  );

  useEffect(() => {
    setFetchingIngredients(true);
    initIngredients().then(() => {
      setFetchingIngredients(false);
    });
  }, [initIngredients]);

  const updatePurchasable = () => {
    if (!props.ingredients) return false;
    const totalQty = Object.values(props.ingredients).reduce(
      (a, b) => a + b
    );
    return totalQty > 0;
  };

  const startOrder = () => {
    if (props.isAuthenticated) {
      setOrdering(true);
    } else {
      props.startOrder();
      props.setAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const cancelOrder = () => {
    setOrdering(false);
  };

  const continueOrder = () => {
    props.history.push("/checkout");
  };

  const burgerAndControls = props.fetchError ? (
    // TODO: why <p> doesn't work with marginTop style here? other styles like color work though.
    <div style={{ marginTop: "10em" }}>
      Ingredients cannot be loaded from the server.
    </div>
  ) : props.ingredients ? (
    <>
      <Burger ingredients={props.ingredients} />
      <BuildControls
        ingredients={props.ingredients}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
        totalPrice={props.totalPrice}
        // updatePurchasable gets called every time this is re-rendered
        purchasable={updatePurchasable()}
        startOrder={startOrder}
        isAuthenticated={props.isAuthenticated}
      />
    </>
  ) : null;
  const orderSummary = props.ingredients ? (
    <Modal show={ordering} closeModal={cancelOrder}>
      <OrderSummary
        ingredients={props.ingredients}
        continueOrder={continueOrder}
        cancelOrder={cancelOrder}
        totalPrice={props.totalPrice}
      />
    </Modal>
  ) : null;
  return (
    <Wrapper {...props}>
      {fetchingIngredients && <Spinner />}
      {orderSummary}
      {burgerAndControls}
    </Wrapper>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
