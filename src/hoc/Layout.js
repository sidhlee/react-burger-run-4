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
        <Toolbar toggleSideDrawer={this.toggleSideDrawer} />
        <SideDrawer
          closeSideDrawer={this.closeSideDrawer}
          sideDrawerOpened={this.state.sideDrawerOpened}
        />
        <StyledContent>{this.props.children}</StyledContent>
      </StyledLayout>
    );
  }
}

export default Layout;
