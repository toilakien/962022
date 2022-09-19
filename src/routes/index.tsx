import React from 'react'
import { useRoutes } from 'react-router-dom';
import Layout from '../views/layout';
import Customer from '../views/pages/customer';
import Order from '../views/pages/order';
import OverView from '../views/pages/overview';
function themeRouters() {
  return useRoutes([
    {
      path: "/",
      element: (<Layout/>),
      children: [
        { path: "/Home", element: <OverView /> },
        { path: "/Person", element: <Customer /> },
        { path: "/Inventory", element: <Order /> },
      ]
    }
  ]);

}
export default themeRouters;