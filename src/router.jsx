import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth";
import DashboardLyout from "./features/dashboard";
import Dashboard from "./features/dashboard/dashboard";
import Users from './features/dashboard/users';
import Settings from "./features/dashboard/settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLyout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
