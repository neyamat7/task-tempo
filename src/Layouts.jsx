import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";

const Layouts = () => {
  return (
    <div> 
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default Layouts;
