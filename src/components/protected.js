import React from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

/**
 * ProtectedRoute se encarga de verificar si un usuasrio puede entrar a las rutas privadas del sistema (/home).
 * En caso de no estar autentificado, el usuario sera redireccionado.
 */

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("test_token")) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
