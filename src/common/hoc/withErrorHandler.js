import React, { useState, useEffect } from "react";
import Modal from "../UI/Modal";

const withErrorHandler = (C, axios) => {
  return props => {
    const [error, setError] = useState(null);

    // Moved req/resInterceptor out of constructor to the top level
    // These will run before rendering(returning) anything.
    const reqInterceptor = axios.interceptors.request.use(req => {
      setError(null);
      return req; // return req (it's a middleware)
    });

    const resInterceptor = axios.interceptors.response.use(
      null,
      err => {
        let errMsg;
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          errMsg = [
            JSON.stringify(err.response.status),
            JSON.stringify(err.response.data)
          ];
        } else if (err.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          errMsg = err.request;
        } else {
          // Something happened in setting up the request that triggered an Error
          errMsg = err.message;
        }
        setError(errMsg);
        // can do something with error later
        return Promise.reject(err);
      }
    );
    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    const closeErrorModal = () => {
      setError(null);
    };

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
