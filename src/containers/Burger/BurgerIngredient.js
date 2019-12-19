import React from "react";
import styled, { css } from "styled-components";

const breadTop = css`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 1% auto;
  /* do we need this? if yes, waht for? */
  position: relative;
`;

const breadBottom = css`
  height: 13%;
  width: 80%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 1% auto;
`;

const seeds1 = css`
  position: absolute;
  left: 30%;
  top: 50%;
  width: 10%;
  height: 15%;
  border-radius: 40%;
  background-color: white;
  box-shadow: inset -2px -3px #c9c9c9;
  transform: rotate(-20dex);
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    left: -170%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    left: 180%;
    top: 90%;
    border-radius: 40%;
    box-shadow: inset -1px -3px #c9c9c9;
  }
`;

const seed2 = css`
  position: absolute;
  left: 64%;
  top: 50%;
  width: 10%;
  height: 15%;
  border-radius: 40%;
  background-color: white;
  box-shadow: inset -3px 0 #c9c9c9;
  transform: rotate(10deg);
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    left: 150%;
    top: -130%;
    border-radius: 40%;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px #c9c9c9;
  }
`;

const beef = css`
  width: 80%;
  height: 8%;
  border-radius: 15px;
  background: linear-gradient(#7f3608, #702e05);
  margin: 1% auto;
`;

const cheese = css`
  width: 90%;
  height: 7%;
  border-radius: 20px;
  background: linear-gradient(#f4d004, #d6bb22);
  margin: 1% auto;
`;

const salad = css`
  width: 85%;
  height: 7%;
  border-radius: 20px;
  background: linear-gradient(#228c1d, #91ce50);
  margin: 1% auto;
`;

const bacon = css`
  width: 80%;
  height: 3%;
  background: linear-gradient(#bf3813, #c45e38);
  margin: 1% auto;
`;

const StyledIngredient = styled.div`
  ${props => {
    switch (props.type) {
      case "bread-top":
        breadTop;
        break;
      case "bread-bottom":
        breadBottom;
        break;
      case "salad":
        salad;
        break;
      case "bacon":
        bacon;
        break;
      case "cheese":
        cheese;
        break;
      case "beef":
        beef;
        break;
      default:
        null;
    }
  }}
`;

const Ingredient = props => <StyledIngredient />;

export default Ingredient;
