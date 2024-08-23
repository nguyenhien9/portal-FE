import { lazy } from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Dasboard = lazy(() => import("../views/dashboard"));
const Customer = lazy(() => import("../views/customer"));
const Staff = lazy(() => import("../views/staff"));
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
      { path: "staff", element: <Staff /> },
      { path: "service", element: <Service /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];
export default routes;
