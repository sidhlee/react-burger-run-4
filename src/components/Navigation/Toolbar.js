import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import NavigationItems from "./NavigationItems";
import DrawerToggle from "./DrawerToggle";

const StyledToolbar = styled.header`
  height: 58px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--darker);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: var(--z-index-Toolbar);
`;

const Toolbar = props => (
  <StyledToolbar {...props}>
    <DrawerToggle />
    <Logo />
    <NavigationItems desktopOnly />
  </StyledToolbar>
);

export default Toolbar;
