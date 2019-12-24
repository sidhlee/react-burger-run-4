import React from "react";
import styled from "styled-components";
import burgerLogo from "../../../assets/images/burger-logo.png";

const Wrapper = styled.div`
  background-color: white;
  height: 70%;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
`;
const StyledLogo = styled.img`
  height: 100%;
`;

const Logo = props => (
  <Wrapper>
    <StyledLogo src={burgerLogo} alt="burger builder logo" />
  </Wrapper>
);

export default Logo;
