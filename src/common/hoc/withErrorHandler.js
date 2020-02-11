import React from "react";
import Modal from "../UI/Modal";
import useHttpErrorHandler from "../hooks/http-error-handler";

const withErrorHandler = (C, axios) => {
  return props => {
    const [error, closeErrorModal] = useHttpErrorHandler(axios);

    return (
      <>
        <Modal show={error} closeModal={closeErrorModal}>
          {error && error}
        </Modal>
        <C {...props} />
      </>
    );
  };
};

export default withErrorHandler;
