import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../views/home"));
const Customer = lazy(() => import("../views/customer"));
const User = lazy(() => import("../views/user"));
const Service = lazy(() => import("../views/service"));

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "customer", element: <Customer /> },
      { path: "user", element: <User /> },
      { path: "service", element: <Service /> },
      { path: "*", element: <Navigate to="/home" /> },
    ],
  },
];
export default routes;
