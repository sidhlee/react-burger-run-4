import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const StyledNavigationItems = styled.ul`
  height: 100%;
  display: ${props => (props.desktopOnly ? "none" : "flex")};
  flex-direction: column;
  margin: 0;
  padding: 0;
  align-items: center;
  list-style: none;

  @media (min-width: 500px) {
    flex-direction: row;
    display: flex;
  }
`;

const NavigationItems = props => (
  <StyledNavigationItems {...props}>
    <NavigationItem active ink="/">
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Check Out</NavigationItem>
  </StyledNavigationItems>
);

export default NavigationItems;
