import { createBrowserRouter } from "react-router";
import Layouts from "./Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        index: true,
        Component: <h1>this is home</h1>,
      },
    ],
  },
]);

export default router;
