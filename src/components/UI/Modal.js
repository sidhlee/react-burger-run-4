import React, { Component } from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";

const StyledModal = styled.div`
  z-index: var(--z-index-Modal);
  position: fixed;
  width: 70%;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  padding: 16px;
  background-color: white;
  border: 1px solid var(--lighter-gray);
  box-shadow: 1px 1px 1px black;
  transition: all 0.3s ease-out;
  transform: ${props =>
    props.show ? "translateY(0)" : "translateY(-100vh)"};
  opacity: ${props => (props.show ? 1 : 0)};
  text-align: center;
  @media (min-width: 600px) {
    --width: 500px;
    width: var(--width);
    left: calc(50% - calc(var(--width) / 2));
  }
`;

class Modal extends Component {
  // don't update Modal and its children when users can't see it.
  shouldComponentUpdate(nextProps, nextState) {
    const trueOrFalse =
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children;
    return trueOrFalse;
  }

  render() {
    return (
      <>
        <Backdrop
          show={this.props.show}
          clicked={this.props.closeModal}
        />
        <StyledModal {...this.props}>
          {this.props.children}
        </StyledModal>
      </>
    );
  }
}

export default Modal;
