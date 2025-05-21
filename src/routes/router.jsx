import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts";
import AddTask from "../components/AddTask/AddTask";
import BrowseTasks from "../components/BrowseTasks/BrowseTasks";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import Home from "../components/Home/Home";
import Loading from "../components/Loading/Loading";
import Login from "../components/Login/Login";
import MyPostedTask from "../components/MyPostedTask/MyPostedTask";
import SignUp from "../components/SignUp/SignUp";
import TaskDetails from "../components/TaskDetailis/TaskDetailis";
import UpdateTask from "../components/UpdateTask/UpdateTask";
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
        path: "forget-password",
        Component: ForgetPassword,
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
        loader: ({ params }) =>
          fetch(`https://task-tempo.vercel.app/tasks/${params.taskId}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoutes>
            <UpdateTask></UpdateTask>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
