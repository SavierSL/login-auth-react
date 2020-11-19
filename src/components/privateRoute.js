import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../components/context/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  //   component: Component or const Component = component;
  const { currentUser } = useAuth();
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      ></Route>
    </>
  );
};

export default PrivateRoute;
