import React from "react";
import styled from "styled-components";

const StyledNavigationItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  /* for nesting inline element to have height */
  display: block;
  width: 100%;

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    align-items: center;
    height: 100%;
    width: auto;
  }
`;

const activeStyleMobile = `
  color: var(--light-blue);
`;

const activeStyleDesktop = `
  background-color: transparent;
  border-bottom: 4px solid var(--light-blue);
  color: white;
`;

const StyledLink = styled.a`
  color: var(--darker);
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  &:active,
  &.active {
    ${activeStyleMobile}
  }
  ${props => (props.active ? activeStyleMobile : null)}

  @media (min-width: 500px) {
    color: #bbb;
    height: 70%;
    padding: 10px 4px;
    margin-right: 1em;
    border-bottom: 4px solid transparent;
    &:active,
    &.active {
      ${activeStyleDesktop}
    }
    ${props => (props.active ? activeStyleDesktop : null)}
  }
`;

const NavigationItem = props => (
  <StyledNavigationItem>
    <StyledLink href={props.link} {...props}>
      {props.children}
    </StyledLink>
  </StyledNavigationItem>
);

export default NavigationItem;
