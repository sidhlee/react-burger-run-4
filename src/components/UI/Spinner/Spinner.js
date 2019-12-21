import React from "react";
import classes from "./Spinner.module.css";
import styled from "styled-components";
import Backdrop from "../Backdrop";

const StyledSpinner = styled.div`
  position: fixed;
  z-index: var(--z-index-Spinner);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = props => (
  <>
    <Backdrop show="true" z={550} />
    <StyledSpinner>
      <div className={classes.loader}>Loading...</div>;
    </StyledSpinner>
  </>
);

export default Spinner;
