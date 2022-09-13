import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../views/layout";
// lazy import elements
const Customer = lazy(() => import("../views/pages/customer/index"));
const ErrorPage = lazy(() => import("../views/pages/ErrorPage/index"));


// all routes
const adminRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/customer",
        element: <Customer />
      },
      {
        path: "notfound",
        element: <ErrorPage />
      },

    ]
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
];
// no info page
const userRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "customer",
        element: <Customer />
      },
      {
        path: "notfound",
        element: <ErrorPage />
      },

    ]
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
];
// no info and users
const unauthorizedRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
];

const ROLES_ROUTES = {
  user: userRoutes,
  admin: adminRoutes,
  undefined: unauthorizedRoutes
};
const ROLES_NAMES = {
  user: "userRoutes",
  admin: "adminRoutes",
  undefined: "unauthorizedRoutes"
};

export const getRoutes = (role:any) => {
  return [] ?? unauthorizedRoutes;
};
