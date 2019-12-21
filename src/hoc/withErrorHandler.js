import React from "react";
import Modal from "../components/UI/Modal";

const withErrorHandler = Component => {
  return props => {
    return (
      <>
        <Modal show={true}>Error is thrown.</Modal>
        <Component {...props} />
      </>
    );
  };
};

export default withErrorHandler;
