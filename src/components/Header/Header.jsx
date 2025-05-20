import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../context/AuthContext/AuthContext";
import DarkIcon from "../Icons/DarkIcon";
import HamburgerIcon from "../Icons/HamburgerIcon";
import LightIcon from "../Icons/LightIcon";

const Header = () => {
  const { user, signOutUser } = useAuth();
  const userEmail = user?.email || user?.providerData[0].email;
  const { pathname, state } = useLocation();
  // const [showUserInfo, setShowUserInfo] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const notify = () =>
    toast.info(
      "Log out complete! Come back soon to manage your bills with ease."
    );

  function handleLogOut() {
    signOutUser()
      .then(() => {
        notify();
      })
      .catch((error) => {
        console.log("Sign out error:", error);
      });
  }

  // Handle hover events for the dropdown
  // const handleMouseEnter = () => {
  //   setShowUserInfo(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowUserInfo(false);
  // };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn text-lg sm:!p-0 sm:!bg-transparent sm:!shadow-none  sm:!border-none ${
            isActive ? "underline text-green-500 font-medium" : "font-normal"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/add-task"
        className={({ isActive }) =>
          `btn text-lg  sm:!p-0 sm:!bg-transparent sm:!shadow-none sm:!border-none ${
            isActive ? "underline text-green-500 font-medium" : "font-normal"
          }`
        }
      >
        Add Task
      </NavLink>
      <NavLink
        to="/browse-task"
        className={({ isActive }) =>
          `btn text-lg font-normal sm:!p-0 sm:!bg-transparent sm:!shadow-none sm:!border-none ${
            isActive ? "underline text-green-500 font-medium" : "font-normal"
          }`
        }
      >
        Browse Tasks
      </NavLink>

      <NavLink
        to="/my-tasks"
        className={({ isActive }) =>
          `btn text-lg font-normal sm:!p-0 sm:!bg-transparent sm:!shadow-none sm:!border-none ${
            isActive ? "underline text-green-500 font-medium" : "font-normal"
          }`
        }
      >
        My Posted Tasks
      </NavLink>
    </>
  );

  const buttonLinks = (
    <>
      <Link
        to="/login"
        className={`btn ${pathname === "/login" ? "btn-active" : ""} ${
          user ? "hidden" : "flex"
        }`}
      >
        Login
      </Link>
      <Link
        to="/register"
        state={state}
        className={`btn ${pathname === "/register" ? "btn-active" : ""} ${
          user ? "hidden" : "flex"
        }`}
      >
        Register
      </Link>
    </>
  );

  return (
    <div className="bg-[#123524] shadow-md">
      <div className="navbar max-w-screen-xl mx-auto w-full flex justify-between pr-4">
        <div className="flex items-center">
          <div className="dropdown sm:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-[#85A947]/20"
            >
              <HamburgerIcon />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#EFE3C2] rounded-box z-10 mt-3 w-52 p-2 shadow space-y-3 border border-[#85A947]/30"
            >
              {navLinks}
              {buttonLinks}
            </ul>
          </div>
          <Link to="/" className="font-bold text-2xl text-[#85A947] sm:pl-2">
            Freelance Market
          </Link>
        </div>

        <div className="hidden sm:flex gap-4 text-lg text-[#EFE3C2]">
          {navLinks}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle hover:bg-[#85A947]/20 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <DarkIcon /> : <LightIcon />}
          </button>

          {!user && <div className="hidden sm:flex gap-3">{buttonLinks}</div>}

          {user && (
            <div
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              className="dropdown dropdown-end dropdown-hover"
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform"
              >
                <div className="w-10 rounded-full border border-[#85A947]">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#EFE3C2] rounded-box z-10 mt-0 w-fit p-2 shadow border border-[#3E7B27]/30"
              >
                <li>
                  <div className="flex flex-col items-start gap-0 px-2 py-1">
                    <p className="text-lg text-[#123524]">{user.displayName}</p>
                    <p className="text-sm text-[#3E7B27]">{userEmail}</p>
                  </div>
                </li>

                <li>
                  <a
                    className="text-[#123524] hover:bg-[#85A947]/20 transition-colors"
                    onClick={handleLogOut}
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
