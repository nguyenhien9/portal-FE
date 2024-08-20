import { lazy } from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Dasboard = lazy(() => import("../views/dashboard"));
const Customer = lazy(() => import("../views/customer"));
const User = lazy(() => import("../views/user"));
const Service = lazy(() => import("../views/service"));
const Booking = lazy(() => import("../views/booking"))
const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Dasboard /> },
      { path: "booking", element: <Booking /> },
      { path: "customer", element: <Customer /> },
      { path: "user", element: <User /> },
      { path: "service", element: <Service /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];
export default routes;
