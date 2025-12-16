import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";



const BuyerRoute = ({ children }) => {
  const { user,loading } = useAuth();

  if(loading) return <p>Loading...</p>

  if (user?.role !== "buyer") {
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
