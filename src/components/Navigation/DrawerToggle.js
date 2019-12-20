import React from "react";
import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../../assets/images/menu-icon.svg";

const StyledDrawerToggle = styled(MenuIcon)`
  fill: white;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  border: 3px solid white;
  padding: 5px 4px 1px 4px;
  border-radius: 5px;
  margin: 12px 0;
  transition: all 0.2s ease-out;
  &:hover {
    transform: rotate(0.5turn);
  }
  @media (min-width: 576px) {
    display: none;
  }
`;

const DrawerToggle = props => (
  <Wrapper Onclick={props.clicked}>
    <StyledDrawerToggle onClick={props.toggleSideDrawer} />
  </Wrapper>
);

export default DrawerToggle;
