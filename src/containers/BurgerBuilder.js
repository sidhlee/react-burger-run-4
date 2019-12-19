import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

export class BurgerBuilder extends Component {
  render() {
    return (
      <Wrapper>
        <div>Burger</div>
        <div>Control</div>
      </Wrapper>
    );
  }
}

export default BurgerBuilder;