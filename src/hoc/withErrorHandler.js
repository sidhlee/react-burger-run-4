import React, { Component } from "react";
import Modal from "../components/UI/Modal";

const withErrorHandler = (C, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req; // return req (it's a middleware)
      });
      axios.interceptors.response.use(null, error => {
        let errMsg;
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          errMsg = [
            error.response.data,
            error.response.status,
            error.response.headers
          ];
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          errMsg = error.message;
        } else {
          // Something happened in setting up the request that triggered an Error
          errMsg = error.message;
        }
        this.setState({ error: errMsg });
      });
    }

    closeErrorModal = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <>
          <Modal
            show={this.state.error}
            clicked={this.closeErrorModal}
          >
            {this.state.error && this.state.error}
          </Modal>
          <C {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
