import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useAppSelector } from "../redux/hooks";
import { UniRouteProps } from "../redux/reduxTypes/interfacesComponent";
import { FC } from "react";

export const PrivateRoute: FC<UniRouteProps> = ({
  component,
  redirectTo = "/",
}) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};
