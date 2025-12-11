import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import { Component } from "react";
import Home from "../pages/Home/Shared/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        index:'/',
        Component:Home,
      }
    ]
  },
]);