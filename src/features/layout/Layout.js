import React, { useState } from "react";
import styled from "styled-components";
import Toolbar from "./toolbar/Toolbar";
import SideDrawer from "./SideDrawer";

const StyledLayout = styled.div`
  text-align: center;
`;

const StyledContent = styled.main`
  margin-top: 50px;
`;

const Layout = props => {
  const [sideDrawerOpened, setSideDrawerOpened] = useState(false);

  const closeSideDrawer = () => {
    setSideDrawerOpened(false);
  };
  const toggleSideDrawer = () => {
    setSideDrawerOpened(
      prevSideDrawerOpened => !prevSideDrawerOpened
    );
  };

  return (
    <StyledLayout>
      <Toolbar
        isAuthenticated={props.isAuthenticated}
        toggleSideDrawer={toggleSideDrawer}
      />
      <SideDrawer
        isAuthenticated={props.isAuthenticated}
        closeSideDrawer={closeSideDrawer}
        sideDrawerOpened={sideDrawerOpened}
      />
      <StyledContent>{props.children}</StyledContent>
    </StyledLayout>
  );
};

export default Layout;
