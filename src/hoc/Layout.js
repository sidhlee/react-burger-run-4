import React, { Component } from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  text-align: center;
`;

const StyledContent = styled.main`
  margin-top: 16px;
`;

class Layout extends Component {
  render() {
    return (
      <StyledLayout>
        <div>Toolbar, Sidebar, Backdrop</div>
        <StyledContent>{this.props.children}</StyledContent>
      </StyledLayout>
    );
  }
}

export default Layout;
