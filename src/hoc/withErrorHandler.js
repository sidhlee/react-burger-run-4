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
        console.log(error);
        this.setState({ error });
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
            {this.state.error && this.state.error.message}
          </Modal>
          <C {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
