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

  @media (min-width: 576px) {
    flex-direction: row;
    display: flex;
  }
`;

const NavigationItems = props => (
  <StyledNavigationItems {...props}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {props.isAuthenticated ? (
      <NavigationItem link="/sign-out">Sign Out</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Sign In</NavigationItem>
    )}
  </StyledNavigationItems>
);

export default NavigationItems;
