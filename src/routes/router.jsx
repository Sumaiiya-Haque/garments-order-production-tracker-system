import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import { Component } from "react";
import Home from "../pages/Home/Shared/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import AllProducts from "../pages/Products/AllProducts";
import About from "../pages/Home/Shared/Navbar/About";
import Contact from "../pages/Home/Shared/Navbar/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import ManagerRoute from "./ManagerRoute";
import AddProduct from "../pages/Dashboard/Manager/AddProduct";
import ManageProducts from "../pages/Dashboard/Manager/ManageProducts";
import PendingOrders from "../pages/Dashboard/Manager/PendingOrders";
import ApprovedOrders from "../pages/Dashboard/Manager/ApprovedOrders";
import ManagerProfile from "../pages/Dashboard/Manager/ManagerProfile";
import UpdateProduct from "../pages/Dashboard/Manager/UpdateProduct";
// import OrderForm from "../pages/Orders/OrderForm";

import MyOrders from "../pages/Dashboard/Buyer/MyOrders";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../pages/Products/ProductDetails";
import OrderForm from "../pages/Orders/OrderForm";
// import AuthLayout from "../layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
         index: true,
          Component: Home
         },
      {
         path: "login",
          Component: Login
         },
      { 
        path: "register", 
        Component: Register
       },
      {
         path: "all-products",
          Component: AllProducts 
        },
      {
         path: "about",
          Component: About },
      {
         path: "contact",
         Component: Contact

       },
       {
  path: "product/:id",
  element: (
    <PrivateRoute>
      <ProductDetails />
    </PrivateRoute>
  ),
},
       
    ],
  },

  // 🔐 Dashboard Routes
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "add-product",
        element: (
          <ManagerRoute>
            <AddProduct />
          </ManagerRoute>
        ),
      },
      {
        path: "manage-products",
        element: (
          <ManagerRoute>
            <ManageProducts />
          </ManagerRoute>
        ),
      },

            // ✅ Update Product route
      {
        path: "update-product/:id",
        element: (
          <ManagerRoute>
            <UpdateProduct />
          </ManagerRoute>
        ),
      },
      {
        path: "pending-orders",
        element: (
          <ManagerRoute>
            <PendingOrders />
          </ManagerRoute>
        ),
      },
      {
        path: "approved-orders",
        element: (
          <ManagerRoute>
            <ApprovedOrders />
          </ManagerRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ManagerRoute>
            <ManagerProfile />
          </ManagerRoute>
        ),
      },

      {
  path: "my-orders",
  element: (
    <PrivateRoute>
      <BuyerRoute>
        <MyOrders />
      </BuyerRoute>
    </PrivateRoute>
  ),
},

{
  path: "order/:id",
  element: (
     <PrivateRoute>
     
       <BuyerRoute>
       <OrderForm></OrderForm>
       </BuyerRoute>
     </PrivateRoute>
     
      
  ),
},
    ],
  },
]);
