import React from "react";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { Analytics } from "./screens/Analytics";
import { Create } from "./screens/Create";
import { Data } from "./screens/Data";
import { Edit } from "./screens/Edit";
import { Invoice } from "./screens/Invoice";
import { LogIn } from "./screens/LogIn";
import { Quotation } from "./screens/Quotation";
import { Receipt } from "./screens/Receipt";
import { View } from "./screens/View";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("authToken") !== null;
  return isAuthenticated ? element : <Navigate to="/" />;
};

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LogIn />,
  },
  {
    path: "/invoice/:id",
    element: <ProtectedRoute element={<Invoice />} />,
  },
  {
    path: "/receipt/:id",
    element: <ProtectedRoute element={<Receipt />} />,
  },
  {
    path: "/quotation/:id",
    element: <ProtectedRoute element={<Quotation />} />,
  },
  {
    path: "/data",
    element: <ProtectedRoute element={<Data />} />,
  },
  {
    path: "/analytics",
    element: <ProtectedRoute element={<Analytics />} />,
  },
  {
    path: "/edit/:id",
    element: <ProtectedRoute element={<Edit />} />,
  },
  {
    // path: "/view",
    // element: <ProtectedRoute element={<View />} />,
    path: "/view/:id",
    element: <ProtectedRoute element={<View />} />,
  },
  {
    path: "/create",
    element: <ProtectedRoute element={<Create />} />,
  },
  // Catch-all route: Redirect unknown paths to /log-in
  {
    path: "/*",
    element: <Navigate to="/log-in" />,
  },
]);

const EditPage = () => {
  const { id } = useParams();  // Get the dynamic id from URL
  return <Edit id={id} />;  // Pass id as a prop to Edit component
};

export const App = () => {
  return <RouterProvider router={router} />;
};