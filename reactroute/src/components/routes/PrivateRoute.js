import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginContext from "../../context/loginContext";

export default function PrivateRoute({
  component: Component,
  render: privateRender,
  ...rest
}) {
  const { state } = useContext(LoginContext);
  return (
    <>
      {Component ? (
        <Route
          {...rest}
          render={() =>
            state.isAuthenticated ? <Component /> : <Redirect to="/login" />
          }
        />
      ) : privateRender ? (
        <Route
          {...rest}
          render={() =>
            state.isAuthenticated ? privateRender() : <Redirect to="/login" />
          }
        />
      ) : (
        "boro bemir"
      )}
    </>
  );
}

// export default function PrivateRoute({ children: Component, ...rest }) {
//     const { isAuthenticated } = useContext(LoginContext);
//     return (
//       <Route
//         {...rest}
//         render={() =>
//           isAuthenticated ? <Component /> : <Redirect to="/login" />
//         }
//       />
//     );
//   }

// <PrivateRoute >
//     <Login />
// </PrivateRoute>
