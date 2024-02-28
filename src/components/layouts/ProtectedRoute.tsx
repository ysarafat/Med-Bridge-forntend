import { useAppSelector } from "@/redux/hook";
import { useCurrentToken } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
type ProtectedRouteProps = {
  children: ReactNode;
};
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const token = useAppSelector(useCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
