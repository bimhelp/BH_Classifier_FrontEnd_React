import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext as context } from "../context/authContext";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useContext(context);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export const PublicRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useContext(context);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
