
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import App from "../App";
import Dashboard from "../modules/dashboard/dashboard_component";
import Reminder from "../modules/reminder/reminder_component";

// Lazy loaded components
// const Dashboard = lazy(() => import("../modules/dashboard/dashboard_component"));
// const Reminder = lazy(() => import("../modules/reminder/reminder_component"));

export const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/todos" replace />,
      },
      {
        path: "todos",
        element: <Dashboard />,
      },
      {
        path: "reminder",
        element: <Reminder />,
      },
    ],
  },
];

export const AppRouter = () => {
  return useRoutes(routeConfig);
}
