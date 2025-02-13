import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useAppSelector } from "../redux/hooks";
import { FC } from "react";
import { UniRouteProps } from "../redux/reduxTypes/interfacesComponent";

export const RestrictedRoute: FC<UniRouteProps> = ({
  component,
  redirectTo = "/",
}) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
