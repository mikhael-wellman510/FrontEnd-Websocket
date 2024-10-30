import React from "react";
import { Navigate } from "react-router-dom";

const WithAuth = (WrappedComponent) => {
  return (props) => {
    const isRegistered = localStorage.getItem("phone");
    console.log("Cek", isRegistered);

    if (!isRegistered) {
      return <Navigate to="/" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAuth;
