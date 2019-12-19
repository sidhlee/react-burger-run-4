import React, { Component } from "react";
import styled from "styled-components";
import Toolbar from "../components/Navigation/Toolbar";

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
        <StyledContent>{this.props.children}</StyledContent>
      </StyledLayout>
    );
  }
}

export default Layout;
