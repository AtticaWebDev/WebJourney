import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FC } from "react";

interface PrivateRouteProps {
  children: React.ReactElement;
}
const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
