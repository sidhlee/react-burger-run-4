import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const SignOut = props => {
  useEffect(() => {
    props.signOut();
  });

  return <Redirect to="/" />;
};

export default SignOut;
