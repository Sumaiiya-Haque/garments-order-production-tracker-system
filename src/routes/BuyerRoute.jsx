import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const BuyerRoute = ({ children }) => {
  const { user } = useAuth();

  if (user?.role !== "buyer") {
    return <Navigate to="/" />;
  }

  return children;
};

export default BuyerRoute;