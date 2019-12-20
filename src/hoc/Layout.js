import React, { Component } from "react";
import styled from "styled-components";
import Toolbar from "../components/Navigation/Toolbar";
import SideDrawer from "../components/Navigation/SideDrawer";

const StyledLayout = styled.div`
  text-align: center;
`;

const StyledContent = styled.main`
  margin-top: 50px;
`;

class Layout extends Component {
  render() {
    return (
      <StyledLayout>
        <Toolbar />
        <SideDrawer />
        <StyledContent>{this.props.children}</StyledContent>
      </StyledLayout>
    );
  }
}

export default Layout;
