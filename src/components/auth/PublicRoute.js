import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.uid ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
