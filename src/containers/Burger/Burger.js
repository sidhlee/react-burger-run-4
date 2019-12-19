import React from "react";
import styled from "styled-components";
import Ingredient from "./Ingredient";
import { flatten } from "lodash";

const StyledBurger = styled.div`
  width: 90%;
  margin: auto;
  height: 250px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 400px) {
    width: 350px;
    height: 300px;
  }
  @media (min-width: 576px) and (min-height: 401px) {
    width: 400px;
    height: 350px;
  }
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 450px;
    height: 350px;
  }
`;

const mapIngredients = ingredients => {
  const ingNames = Object.keys(ingredients);
  const arraysOfIngComponents = ingNames.map(name =>
    [...Array(ingredients[name])].map(emptyElement => (
      <Ingredient key={name} type={name} />
    ))
  );
  return flatten(arraysOfIngComponents);
};

const Burger = props => {
  let mappedIngredients = mapIngredients(props.ingredients);
  if (mappedIngredients.length === 0) {
    mappedIngredients = <p>Please add ingredients!</p>;
  }

  return (
    <StyledBurger>
      <Ingredient type="bread-top">
        <Ingredient type="seeds1" />
        <Ingredient type="seeds2" />
      </Ingredient>
      {mappedIngredients}
      <Ingredient type="bread-bottom" />
    </StyledBurger>
  );
};

export default Burger;
