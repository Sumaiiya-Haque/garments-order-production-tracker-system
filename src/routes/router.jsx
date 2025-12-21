import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Shared/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import AllProducts from "../pages/Products/AllProducts";
import About from "../pages/Home/Shared/Navbar/About";
import Contact from "../pages/Home/Shared/Navbar/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductDetails from "../pages/Products/ProductDetails";

// Guards
import PrivateRoute from "./PrivateRoute";
import BuyerRoute from "./BuyerRoute";
import ManagerRoute from "./ManagerRoute";
import AdminRoute from "./AdminRoute";

// Buyer
import MyOrders from "../pages/Dashboard/Buyer/MyOrders";
import BuyerProfile from "../pages/Dashboard/Buyer/BuyerProfile";
import TrackOrder from "../pages/Dashboard/Buyer/TrackOrder";
import OrderForm from "../pages/Dashboard/Buyer/OrderForm";

// Manager
import AddProduct from "../pages/Dashboard/Manager/AddProduct";
import ManageProducts from "../pages/Dashboard/Manager/ManageProducts";
import PendingOrders from "../pages/Dashboard/Manager/PendingOrders";
import ApprovedOrders from "../pages/Dashboard/Manager/ApprovedOrders";
import ManagerProfile from "../pages/Dashboard/Manager/ManagerProfile";
import UpdateProduct from "../pages/Dashboard/Manager/UpdateProduct";

// Admin
import AllOrders from "../pages/Dashboard/Admin/AllOrders";
import AllProductsTable from "../pages/Dashboard/Admin/AllProductsTable";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Payment from "../pages/Dashboard/Buyer/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "all-products", Component: AllProducts },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },

      {
        path: "product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "order/:id",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <OrderForm />
            </BuyerRoute>
          </PrivateRoute>
        ),
      },

      {
  path: "payment",
  element: (
    <PrivateRoute>
      <BuyerRoute>
        <Payment />
      </BuyerRoute>
    </PrivateRoute>
  ),
},

      // ✅ DASHBOARD (সব logged user)
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          // ===== Buyer =====
          {
            path: "my-orders",
            element: (
              <BuyerRoute>
                <MyOrders />
              </BuyerRoute>
            ),
          },
          {
            path: "track-order/:orderId",
            element: (
              <BuyerRoute>
                <TrackOrder />
              </BuyerRoute>
            ),
          },
          {
            path: "buyer-profile",
            element: (
              <BuyerRoute>
                <BuyerProfile />
              </BuyerRoute>
            ),
          },

          // ===== Manager =====
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
            path: "manager-profile",
            element: (
              <ManagerRoute>
                <ManagerProfile />
              </ManagerRoute>
            ),
          },

          // ===== Admin =====
          {
            path: "all-orders",
            element: (
              <AdminRoute>
                <AllOrders />
              </AdminRoute>
            ),
          },
          {
            path: "all-products-table",
            element: (
              <AdminRoute>
                <AllProductsTable />
              </AdminRoute>
            ),
          },
          {
            path: "manage-users",
            element: (
              <AdminRoute>
                <ManageUsers />
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);





// import { createBrowserRouter } from "react-router";
// import RootLayout from "../layouts/RootLayout";
// import { Component } from "react";
// import Home from "../pages/Home/Shared/Home/Home";
// import Login from "../pages/Auth/Login/Login";
// import Register from "../pages/Auth/Register/Register";
// import AllProducts from "../pages/Products/AllProducts";
// import About from "../pages/Home/Shared/Navbar/About";
// import Contact from "../pages/Home/Shared/Navbar/Contact";
// import DashboardLayout from "../layouts/DashboardLayout";
// import ManagerRoute from "./ManagerRoute";
// import AddProduct from "../pages/Dashboard/Manager/AddProduct";
// import ManageProducts from "../pages/Dashboard/Manager/ManageProducts";
// import PendingOrders from "../pages/Dashboard/Manager/PendingOrders";
// import ApprovedOrders from "../pages/Dashboard/Manager/ApprovedOrders";
// import ManagerProfile from "../pages/Dashboard/Manager/ManagerProfile";
// import UpdateProduct from "../pages/Dashboard/Manager/UpdateProduct";


// import MyOrders from "../pages/Dashboard/Buyer/MyOrders";
// import BuyerRoute from "./BuyerRoute";
// import PrivateRoute from "./PrivateRoute";
// import ProductDetails from "../pages/Products/ProductDetails";

// import BuyerProfile from "../pages/Dashboard/Buyer/BuyerProfile";
// import TrackOrder from "../pages/Dashboard/Buyer/TrackOrder";
// import AllOrders from "../pages/Dashboard/Admin/AllOrders";
// import OrderForm from "../pages/Dashboard/Buyer/OrderForm";
// import AllProductsTable from "../pages/Dashboard/Admin/AllProductsTable";
// import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: RootLayout,
//     children: [
//       {
//          index: true,
//           Component: Home 
//         },
//       { 
//         path: "login",
//          Component: Login 
//         },
//       {
//          path: "register",
//           Component: Register 
//         },
//       { 
//         path: "all-products",
//          Component: AllProducts
//          },
//       { 
//         path: "about",
//          Component: About
//          },
//       { 
//         path: "contact", 
//         Component: Contact 
//       },

//       {
//         path: "product/:id",
//         element: (
//           <PrivateRoute>
//             <ProductDetails />
//           </PrivateRoute>
//         ),
//       },

//           {
//   path: "order/:id",
//   element: (
//     <PrivateRoute>
//       <BuyerRoute>
//         <OrderForm />
//       </BuyerRoute>
//     </PrivateRoute>
//   ),
// },

//    {
//             path: "my-orders",
//             element: (
//               <BuyerRoute>
//                 <MyOrders />
//               </BuyerRoute>
//             ),
//           },

//              {
//         path: "track-order/:orderId",
//         element: <TrackOrder />,
//       },
//       {
//         path: "buyer-profile",
//         element: <BuyerProfile />,
//       },
//       // ✅ Dashboard nested inside RootLayout
//       {
//         path: "dashboard",
//         element: (
//           <PrivateRoute>
//           <ManagerRoute>
//               <DashboardLayout />
//           </ManagerRoute>
//           </PrivateRoute>
//         ),
//         children: [
//           {
//             path: "add-product",
//             element: (
//               <ManagerRoute>
//                 <AddProduct />
//               </ManagerRoute>
//             ),
//           },
//           {
//             path: "manage-products",
//             element: (
//               <ManagerRoute>
//                 <ManageProducts />
//               </ManagerRoute>
//             ),
//           },
//           {
//             path: "update-product/:id",
//             element: (
//               <ManagerRoute>
//                 <UpdateProduct />
//               </ManagerRoute>
//             ),
//           },
//           {
//             path: "pending-orders",
//             element: (
//               <ManagerRoute>
//                 <PendingOrders />
//               </ManagerRoute>
//             ),
//           },
//           {
//             path: "approved-orders",
//             element: (
//               <ManagerRoute>
//                 <ApprovedOrders />
//               </ManagerRoute>
//             ),
//           },
//           {
//             path: "manager-profile",
//             element: (
//               <ManagerRoute>
//                 <ManagerProfile />
//               </ManagerRoute>
//             ),
//           },

//            {
//       path: "all-orders",  
//       element: <AllOrders /> 
//     },
//            {
//       path: "all-products-table",  
//       element: <AllProductsTable /> 
//     },
//            {
//       path: "manage-users",  
//       element: <ManageUsers /> 
//     }
       
      
//         ],
//       },
//     ],
//   },
// ]);

