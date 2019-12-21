import React from "react";
import styled from "styled-components";

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: ${props =>
    props.z ? props.z : "var(--z-index-Backdrop)"};
  background-color: rgba(0, 0, 0, 0.5);
`;

const Backdrop = props =>
  props.show ? (
    <StyledBackdrop z={props.z} onClick={props.clicked} />
  ) : null;

export default Backdrop;
