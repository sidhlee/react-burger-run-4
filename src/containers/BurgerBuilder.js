import React, { Component } from "react";
import styled from "styled-components";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls";
import * as mock from "../mock";

const Wrapper = styled.div``;

export class BurgerBuilder extends Component {
  state = {
    ingredients: { ...mock.ingredients }
  };

  render() {
    return (
      <Wrapper>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
