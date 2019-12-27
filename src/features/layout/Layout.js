import React, { Component } from "react";
import styled from "styled-components";
import Toolbar from "./toolbar/Toolbar";
import SideDrawer from "./SideDrawer";

const StyledLayout = styled.div`
  text-align: center;
`;

const StyledContent = styled.main`
  margin-top: 50px;
`;

class Layout extends Component {
  state = {
    sideDrawerOpened: false
  };

  closeSideDrawer = () => {
    this.setState({ sideDrawerOpened: false });
  };
  toggleSideDrawer = () => {
    this.setState(prevState => ({
      sideDrawerOpened: !prevState.sideDrawerOpened
    }));
  };
  render() {
    return (
      <StyledLayout>
        <Toolbar
          isAuthenticated={this.props.isAuthenticated}
          toggleSideDrawer={this.toggleSideDrawer}
        />
        <SideDrawer
          isAuthenticated={this.props.isAuthenticated}
          closeSideDrawer={this.closeSideDrawer}
          sideDrawerOpened={this.state.sideDrawerOpened}
        />
        <StyledContent>{this.props.children}</StyledContent>
      </StyledLayout>
    );
  }
}

export default Layout;
