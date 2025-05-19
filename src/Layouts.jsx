import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layouts = () => {
  return (
    <div> 
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Layouts;
