import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Analytics } from "./screens/Analytics";
import { Create } from "./screens/Create";
import { Data } from "./screens/Data";
import { Edit } from "./screens/Edit";
import { Invoice } from "./screens/Invoice";
import { LogIn } from "./screens/LogIn";
import { Quotation } from "./screens/Quotation";
import { Receipt } from "./screens/Receipt";
import { View } from "./screens/View";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LogIn />,
  },
  {
    path: "/invoice",
    element: <Invoice />,
  },
  {
    path: "/receipt",
    element: <Receipt />,
  },
  {
    path: "/quotation",
    element: <Quotation />,
  },
  {
    path: "/data",
    element: <Data />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/log-in",
    element: <LogIn />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
  {
    path: "/view",
    element: <View />,
  },
  {
    path: "/create",
    element: <Create />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
