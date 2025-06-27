import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts";
import AddTask from "../components/AddTask/AddTask";
import BrowseTasks from "../components/BrowseTasks/BrowseTasks";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyPostedTask from "../components/MyPostedTask/MyPostedTask";
import SignUp from "../components/SignUp/SignUp";
import TaskDetails from "../components/TaskDetailis/TaskDetailis";
import UpdateTask from "../components/UpdateTask/UpdateTask";
import AllTasksPage from "../pages/Dashboard/AllTasksPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Overview from "../pages/Dashboard/Overview";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: SignUp,
      },
      {
        path: "add-task",
        element: (
          <PrivateRoutes>
            <AddTask></AddTask>
          </PrivateRoutes>
        ),
      },
      {
        path: "browse-task",
        element: <BrowseTasks></BrowseTasks>,
      },
      {
        path: "my-tasks",
        element: (
          <PrivateRoutes>
            <MyPostedTask></MyPostedTask>
          </PrivateRoutes>
        ),
      },
      {
        path: "details/:taskId",
        element: (
          <PrivateRoutes>
            <TaskDetails></TaskDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "update/:taskId",
        element: (
          <PrivateRoutes>
            <UpdateTask></UpdateTask>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoutes>
            <Overview />
          </PrivateRoutes>
        ),
      },
      {
        path: "all-tasks",
        element: (
          <PrivateRoutes>
            <AllTasksPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "my-tasks",
        element: (
          <PrivateRoutes>
            <MyPostedTask></MyPostedTask>
          </PrivateRoutes>
        ),
      },
      {
        path: "add-task",
        element: (
          <PrivateRoutes>
            <AddTask></AddTask>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
