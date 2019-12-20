import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import NavigationItems from "./NavigationItems";
import Backdrop from "../UI/Backdrop";

const StyledSideDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  min-width: 200px;
  max-width: 250px;
  height: 100%;
  z-index: var(--z-index-SideDrawer);
  background-color: white;
  padding: 35px 25px;
  box-sizing: border-box;
  /* animated toggle */
  transition: transform 0.3s ease-out;
  transform: ${props =>
    props.show ? "translateX(0)" : "translateX(-100%)"};

  @media (min-width: 576px) {
    display: none;
  }
  text-align: left;
`;

const LogoWrapper = styled.div`
  height: 15%;
  transform: translateX(-10px);
`;

const SideDrawer = props => (
  <>
    <Backdrop
      show={props.sideDrawerOpened}
      clicked={props.closeSideDrawer}
    />
    <StyledSideDrawer
      show={props.sideDrawerOpened}
      {...props}
      Onclick={props.closeSideDrawer}
    >
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavigationItems />
    </StyledSideDrawer>
  </>
);

export default SideDrawer;
