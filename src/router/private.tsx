import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  isAllowed: boolean;
  children?: JSX.Element;
  redirectPath?: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  isAllowed,
  children,
  redirectPath = "/",
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
