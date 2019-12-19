import React from "react";
import styled from "styled-components";
import Logo from "../Logo";

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
  z-index: 90;
`;

const Toolbar = props => (
  <StyledToolbar>
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </StyledToolbar>
);

export default Toolbar;
