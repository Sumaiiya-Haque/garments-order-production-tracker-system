import { Navigate } from "react-router";
import useRole from "../hooks/useRole";

const ManagerRoute = ({ children }) => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return <p>Loading...</p>;
  }

  if (role !== "manager") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ManagerRoute;
