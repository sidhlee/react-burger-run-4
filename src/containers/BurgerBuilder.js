import React, { Component } from "react";
import styled from "styled-components";
import Burger from "./Burger/Burger";
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
        <div>Control</div>
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
