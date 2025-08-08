import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Dashboard, Home } from "./pages";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
