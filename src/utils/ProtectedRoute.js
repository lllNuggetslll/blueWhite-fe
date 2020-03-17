import React from "react";
import { node } from "prop-types";
import { Route, Redirect } from "react-router-dom";
import WithUser from "./WithUser";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = localStorage.getItem("token") ? true : false;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthorized ? (
          <WithUser>
            {({ userInfo }) => {
              return <Component {...props} {...{ userInfo }} />;
            }}
          </WithUser>
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = { component: node.isRequired };

export default ProtectedRoute;
