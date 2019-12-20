import React from "react";
import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../../assets/images/menu-icon.svg";

const StyledDrawerToggle = styled(MenuIcon)`
  fill: white;
`;

const DrawerToggle = props => (
  <StyledDrawerToggle onClick={props.toggleDrawer} />
);

export default DrawerToggle;
