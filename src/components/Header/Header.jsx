import { Link, NavLink, useLocation } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../context/AuthContext/AuthContext";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import DarkIcon from "../Icons/DarkIcon";
import HamburgerIcon from "../Icons/HamburgerIcon";
import LightIcon from "../Icons/LightIcon";

const Header = () => {
  const { user, signOutUser } = useAuth();

  const { darkMode, toggleTheme } = useTheme();

  const userEmail = user?.email || user?.providerData[0].email;
  const { pathname, state } = useLocation();

  const notify = () =>
    toast.info("Log out complete! Come back soon to manage your posted tasks");

  function handleLogOut() {
    signOutUser()
      .then(() => {
        notify();
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        toast.error("sign out error");
      });
  }

  const mobileNavLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn bg-gray-50 text-lg ${
            isActive ? "underline font-medium" : "font-normal"
          } text-gray-800`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/add-task"
        className={({ isActive }) =>
          `btn bg-gray-50 text-lg  ${
            isActive ? "underline font-medium" : "font-normal"
          } text-gray-800`
        }
      >
        Add Task
      </NavLink>

      <NavLink
        to="/browse-task"
        className={({ isActive }) =>
          `btn bg-gray-50 text-lg ${
            isActive ? "underline font-medium" : "font-normal"
          } text-gray-800`
        }
      >
        Browse Tasks
      </NavLink>

      <NavLink
        to="/my-tasks"
        className={({ isActive }) =>
          `btn bg-gray-50 text-lg ${
            isActive ? "underline font-medium" : "font-normal"
          } text-gray-800`
        }
      >
        My Posted Tasks
      </NavLink>
    </>
  );

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn bg-gray-50 text-base md:!p-0 md:!bg-transparent md:!shadow-none md:!border-none ${
            isActive ? "underline font-medium" : "font-normal"
          } ${darkMode ? "text-gray-200" : "text-gray-800"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/add-task"
        className={({ isActive }) =>
          `btn bg-gray-50 text-base md:!p-0 md:!bg-transparent md:!shadow-none md:!border-none ${
            isActive ? "underline font-medium" : "font-normal"
          } ${darkMode ? "text-gray-200" : "text-gray-800"}`
        }
      >
        Add Task
      </NavLink>
      <NavLink
        to="/browse-task"
        className={({ isActive }) =>
          `btn bg-gray-50 text-base font-normal md:!p-0 md:!bg-transparent md:!shadow-none md:!border-none ${
            isActive ? "underline font-medium" : "font-normal"
          } ${darkMode ? "text-gray-200" : "text-gray-800"}`
        }
      >
        Browse Tasks
      </NavLink>

      <NavLink
        to="/my-tasks"
        className={({ isActive }) =>
          `btn bg-gray-50 text-base font-normal md:!p-0 md:!bg-transparent md:!shadow-none md:!border-none ${
            isActive ? "underline font-medium" : "font-normal"
          } ${darkMode ? "text-gray-200" : "text-gray-800"}`
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
        className={`btn ${
          pathname === "/login"
            ? "btn-active bg-gray-300 text-gray-800 hover:bg-gray-400 hover:text-black"
            : ""
        } ${user ? "hidden" : "flex"} ${
          darkMode
            ? "bg-dark-clr text-gray-200 hover:bg-[#423F3E]"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        Login
      </Link>
      <Link
        to="/register"
        state={state}
        className={`btn ${
          pathname === "/register"
            ? "btn-active bg-gray-300 text-gray-800 hover:bg-gray-400 hover:text-black"
            : ""
        } ${user ? "hidden" : "flex"} ${
          darkMode
            ? "bg-dark-clr text-gray-200 hover:bg-card-clr"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        Register
      </Link>
    </>
  );

  

  return (
    <div className={`shadow-md ${darkMode ? "bg-card-clr" : "bg-gray-50"}`}>
      <div className="navbar max-w-screen-xl mx-auto w-full flex justify-between pr-4">
        <div className="flex items-center">
          <div className={`dropdown ${user ? "md:hidden" : "lg:hidden"}`}>
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost btn-circle ${
                darkMode
                  ? "hover:bg-dark-clr"
                  : "hover:bg-gray-200 text-gray-500"
              }`}
            >
              <HamburgerIcon />
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow space-y-3 border ${
                darkMode
                  ? "bg-dark-clr border-[#423F3E]"
                  : "bg-white border-gray-200"
              }`}
            >
              {mobileNavLinks}
              {buttonLinks}
            </ul>
          </div>
          <Link
            to="/"
            className={`font-bold text-2xl sm:pl-2 ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            TaskTempo
          </Link>
        </div>

        <div
          className={`hidden ${user ? "md:flex" : "lg:flex"}  gap-4 text-lg ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {navLinks}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`btn btn-sm btn-ghost btn-circle transition-colors ${
              darkMode
                ? "hover:bg-dark-clr border border-gray-50"
                : "hover:bg-gray-200 border border-gray-400 text-black"
            }`}
            aria-label="Toggle Theme"
          >
            {!darkMode ? <DarkIcon /> : <LightIcon />}
          </button>

          {!user && <div className="hidden sm:flex gap-3">{buttonLinks}</div>}

          {user && (
            <div className="dropdown dropdown-end dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform"
              >
                <div
                  className={`w-10 rounded-full border ${
                    darkMode ? "border-[#423F3E]" : "border-gray-300"
                  }`}
                >
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL || "/placeholder.svg"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content rounded-box z-10 mt-0 w-fit p-2 shadow border ${
                  darkMode
                    ? "bg-dark-clr border-[#423F3E] text-gray-200"
                    : "bg-white border-gray-200"
                }`}
              >
                <li>
                  <div className="flex flex-col items-start gap-0 px-2 py-1">
                    <p
                      className={`text-lg ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {user.displayName}
                    </p>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {userEmail}
                    </p>
                  </div>
                </li>

                <li className="mt-4">
                  <a
                    className={`border border-gray-200 flex justify-center transition-colors text-lg ${
                      darkMode
                        ? "text-gray-200 hover:bg-hover-clr"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
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


