// routes/ManagerRoute.jsx
import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";


const ManagerRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default ManagerRoute;