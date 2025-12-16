import { Navigate } from "react-router";
import useRole from "../hooks/useRole";


const BuyerRoute = ({ children }) => {
  const { role, roleLoading } = useRole();

  if (roleLoading) return <p>Loading...</p>;

  if (role !== "buyer") {
    return <Navigate to="/" />;
  }

  return children;
};

export default BuyerRoute;


// const BuyerRoute = ({ children }) => {
//   const { user, loading } = useAuth();

//   if (loading) return <p>Loading...</p>;

 
//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default BuyerRoute;
